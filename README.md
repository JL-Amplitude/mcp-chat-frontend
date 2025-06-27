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

### :hourglass_flowing_sand: Set up your Node installation:

Download Node.js at https://nodejs.org/en/download or directly open a Terminal and execute the following commands.

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
###  :twisted_rightwards_arrows: Create your OpenAI Account and API key

1. Go to [OpenAI](https://openai.com/) and create an account or log-in if you have already one. On the log-in button select "API Platform"
2. Go to your [Settings page](https://platform.openai.com/settings/organization/general) and select **API Keys** Section
3. Click on **Create new secret key** and keep your key as you will need it later on your code. Be aware you won't be able to see it again, so **keep it in a safe place**

### :octocat: Create a Github account
If you do not have a Github account, you need to create one

1. Go to [Github site](https://github.com) and create your account
2. If you are using Homebrew, just run ```brew install git``` and verify the installation running ```git --version```
4. If you'd rather use the Git binery installer, go to [Github website](https://git-scm.com/downloads/mac) (be aware this is a binary from 4 years ago so not recommended)

#### :beer: Optional: Install Homebrew
If you'd rather use the Git package installation, install the package manager Homebrew which also will give you a way to install future packages. For this you have 2 main options:

1. Execute ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"``` and follow the instructions
2. Download the latest Mac package version from [Hombrew git repository](https://github.com/Homebrew/brew/releases/tag/4.5.8)
   
### 📂 Create your Vercel account

In you don't yet have a Vercel account, follow the following steps:

1. Go to [Vercel](https://vercel.com) and click **Sign-up**
2. Select **I'm working on personal projects**
3. Set your name and choose **Continue with Github** so we connect Vercel and your github repositories for an easier and faster deployment
4. Authorise Vercel to connect to Github.
5. You're done!

## 🗂️ Step-by-step app installation

### Cloning mcp-chat-fronted Github repository

You have the application to install in a Github repository, so you will just clone the repository to lacal and push it to your own Github. 

1. Open a **Terminal** and create a new folder that will old the code for the app, for example, for **MCPChat** execute ```mkdir MCPChat```
2. Enter that folder ```cd MCPChat``` and execute ```git repo clone JL-Amplitude/mcp-chat-frontend```
3. Enter the new folder ```cd mcp-chat-frontend```
4. Push it to your own Github repository executing the following commands

```
git init
git add .
git commit -m "Initial MCP chat frontend"
git remote add origin https://github.com/yourusername/mcp-chat-frontend.git
git push -u origin main
```

Now you have your code ready and pushed to Github. As next steps, we are going to deploy the app and here you have two options:

1. Deploy it to a hosted infrastructure such as Vercel, a cloud platform focused on simplifying web development, specifically for building, deploying, and scaling frontend and serverless applications.
2. Install, build and run everything locally using Node.js. 

### 📂 Vercel deployment

1. Go to your Vercel account dashboard and click on **Add new..." selecting **Project**
2. In the **Import git repository**, select **Add a Github account** to add your github account
3. In the pop-up that appears, select **Install Vercel in all repositories**
4. Log-in with your Github account
5. Select **mcp-chat-frontend** repository and click **Import**.

   In the next screen you will see that Vercel has automatically detected it is a React Native app with the preset framework **Create React App**. Just check the **Build and Output settings** where automatically, because of the React Native framework, you will see (at least)  ```npm run build``` and ```npm install``` whcih will generate all the needed modules.

6. Click in **Environment Variables** and add the OpenAI API key for it is read from the environment

   - Key: REACT_APP_OPENAI_API_KEY
   - Value: Your OpenAI API key (

7. Click **Deploy**
8. Congratulations!! You have deployed the application successfully!! Click **Continue to Dashboard**

To access the app, you have the URL in the **Domains** holder in the app's dashboard. Probably you will see the main domain https://mcp-chat-frontend.vercel.app and at least 2 more, ond of them sufixxed with your username, **select the latter** to open the app.

### 📂 Local deployment

From a **Terminal** shell, go (stay) in the folder you cloned your code in, supossedly **mcp-chat-frontend**, and:

1. Enter the folder ```cd ~/your_path/mcp-chat-frontend```
2. Edit the ```.env``` file ```vi .env``` and change add value with your API key
4. Execute ```npm run build```
5. Execute ```npm install``` 

This will install all the needed modules and generate the server to execute your app locally. For this, just execute ```npm start```; this will start the server in ```http://localhost:3000/``` and open the browser with the app.

That's all!! Either with Vercel of local deployment, have fun!!
     
