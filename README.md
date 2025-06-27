# 🚀 MCP Chat Frontend (Agentic AI SE Enablement)

## 💡 Features:
Clean React UI (using Tailwind + shadcn/ui)

Live chat with the MCP backend at OpenAI using gpt-4.1-nano

Simple session tracking

## ✅ Prerequisites
1. Your frontend is built using React + Tailwind, so it requires react support (in this case is using Node) and Tailwind packages installed.

2. MCP FastAPI backend is running remotely on OpenAI via its APIs (https://api.openai.com/v1/chat/completions), so an OpenAI account and an API key is needed. Nonetheless, you have also included a local LLM version (MCPChat.jsx.local) where your backend will run in http://localhots:8000/mcp or could be hosted separately (e.g., via Render or Railway). 
For this usage you will need a local LLM with tools like Ollama, for instance, that provides access to LLMs such as llama3, llama3.2, DeepSeek-V2 and DeepSeek-V2.5, Mistral, etc. 

3. You have a GitHub account.

4. You’ve signed up at https://vercel.com.

## 🗂️ Step-by-step requirements set-up

### 📂 Set up your Node installation:

1. Download Node.js at https://nodejs.org/en/download or directly open a Terminal and execute the following commands.

```
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.17.0".
nvm current # Should print "v22.17.0".

# Verify npm version:
npm -v # Should print "10.9.2".
```
   
3. 
