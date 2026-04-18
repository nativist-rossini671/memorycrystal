// pressure-log.js — rate-limited pressure-event telemetry for Crystal's
// assemble() byte budget, plus host-compact attribution counters.
//
// Schema emitted (single JSON-encoded log line per event):
//   {
//     kind: "crystal_pressure",
//     session, est_tokens, ceiling, action,
//     hostCompactInvoked,          // bool — did the host invoke compact()
//                                  // at least once since the last pressure event?
//     hostCompactTokensReclaimed,  // total tokens reclaimed by host-invoked
//                                  // compaction in the same interval
//     suppressed_since_last,       // N rate-limited events we didn't log
//     ts                           // epoch ms
//   }
//
// Rate limit: at most one log line per session per PRESSURE_EVENT_MIN_INTERVAL_MS
// (60_000 ms). Suppressed events bump an aggregate counter that flushes on the
// next successful log. This exists to prevent hot sessions from flooding logs
// while still reporting that pressure happened.

const PRESSURE_EVENT_MIN_INTERVAL_MS = 60_000;

const pressureEventState = new Map(); // sessionKey -> { lastAt, suppressed }
const hostCompactState = new Map(); // sessionKey -> { invoked, tokensReclaimed }

function recordHostCompact(sessionKey, tokensReclaimed) {
  const key = String(sessionKey || "default");
  const cur = hostCompactState.get(key) || { invoked: 0, tokensReclaimed: 0 };
  cur.invoked += 1;
  if (Number.isFinite(Number(tokensReclaimed))) {
    cur.tokensReclaimed += Math.max(0, Math.floor(Number(tokensReclaimed)));
  }
  hostCompactState.set(key, cur);
}

function consumeHostCompact(sessionKey) {
  const key = String(sessionKey || "default");
  const cur = hostCompactState.get(key) || { invoked: 0, tokensReclaimed: 0 };
  hostCompactState.set(key, { invoked: 0, tokensReclaimed: 0 });
  return cur;
}

function emitPressureEvent({ sessionKey, estTokens, ceiling, action, logger, now = Date.now() }) {
  const key = String(sessionKey || "default");
  const state = pressureEventState.get(key) || { lastAt: null, suppressed: 0 };
  if (state.lastAt !== null && now - state.lastAt < PRESSURE_EVENT_MIN_INTERVAL_MS) {
    state.suppressed += 1;
    pressureEventState.set(key, state);
    return { logged: false, suppressed: state.suppressed };
  }
  const hostAttribution = consumeHostCompact(key);
  const suppressed = state.suppressed;
  const event = {
    kind: "crystal_pressure",
    session: key,
    est_tokens: Math.max(0, Math.floor(Number(estTokens) || 0)),
    ceiling: Math.max(0, Math.floor(Number(ceiling) || 0)),
    action: String(action || "observe"),
    hostCompactInvoked: hostAttribution.invoked > 0,
    hostCompactTokensReclaimed: hostAttribution.tokensReclaimed,
    suppressed_since_last: suppressed,
    ts: now,
  };
  try {
    (logger?.info || logger?.log || console.log)(`[crystal] pressure ${JSON.stringify(event)}`);
  } catch {
    // Logging must never throw.
  }
  pressureEventState.set(key, { lastAt: now, suppressed: 0 });
  return { logged: true, event };
}

function __resetForTests() {
  pressureEventState.clear();
  hostCompactState.clear();
}

module.exports = {
  PRESSURE_EVENT_MIN_INTERVAL_MS,
  emitPressureEvent,
  recordHostCompact,
  consumeHostCompact,
  __resetForTests,
};
