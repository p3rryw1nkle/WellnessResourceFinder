# Overview

Here's a step-by-step guide that explains how to clone this GitHub repository containing the React (website) project, edit the code, and update the website. 

### Prerequisites

Before you start, ensure you have the following installed on your computer:

1. **Git:** This is a version control system (way of collaborating on code) that lets you download and manage the code from GitHub. You can download it from [git-scm.com](https://git-scm.com/).

2. **Node.js and npm:** Node.js is the runtime environment required to run a React project, and npm (node package manager) is a package manager used to install dependencies. Download Node.js (which includes npm) from [nodejs.org](https://nodejs.org/).

3. **Visual Studio Code (VS Code):** This is an editor where you can view and edit the code. Download it from [code.visualstudio.com](https://code.visualstudio.com/).

### Cloning the GitHub Repository

Here is a [video tutorial](https://www.youtube.com/watch?v=ILJ4dfOL7zs&ab_channel=CodingWithMeet)

If the tutorial is no longer available here is a step-by-step guide:

1. **Find the Repository URL:** Click the green 'Code' button and copy the URL under 'Clone with HTTPS'.
  
2. **Open the Project in VS Code:**
    - Click on the 'source control' button on the left-hand side of Visual Studio Code (it should look like a cyber tree branch with 3 circles)
    - Click on 'clone repository'
    - Enter the URL copied in the prompt window that pops up in Visual Code
    - Select the location you want to store the files
    - Click on 'open' when VS Code asks if you would like to open the repository

### Building the React Project

1. **Navigate to resource-finder folder**
   - Open up an integrated terminal within VS Code. I'm not sure about windows, but on Mac you click 'terminal > new terminal' at the top of the screen
   - Type `cd resource-finder` to move inside of the resource-finder folder. This is where the React project is stored.
   - *If this doesn't work you may already be inside of the resouce-finder folder. Type `pwd` (print working directory) and hit enter. It will display your current path, resource-finder should be at the end.

2. **Install Dependencies:**
    - Inside the same terminal/command window type `npm install` and press `Enter`. This installs all the necessary dependencies for the React project.

### Launching the Website

1. **Start the React Application:**
    - Type `npm start` and press `Enter`. This command starts the React application.
    - Wait for the process to complete. It might take a few minutes.

2. **View the Website:**
    - Once the process is complete, your default web browser should automatically open with the React project running.
    - If it doesn’t open automatically, you can manually open your browser and go to `http://localhost:3000`. This is the local address where the React project is hosted.

### Making Changes in Visual Studio Code

1. **Edit the Code:**
    - In VS Code, browse through the project files in the sidebar.
    - Open any file you wish to change by clicking on it.
    - Make your changes in the file. You can edit text, add new files, or modify existing ones.
    - As you make changes, you should see them automatically displayed in the browser as long as the project is running, at http://localhost:3000

2. **Save Your Changes:**
    - After editing, save your changes by pressing `Ctrl + S` (or `Cmd + S` on Mac).
  
### Pushing Changes to GitHub

1. **Stage Your Changes:**
    - Go back to Command Prompt or Terminal in VS Code.
    - Type `git add .` and press `Enter`. This command stages all your changes for commit.

2. **Commit Your Changes:**
    - Type `git commit -m "Your commit message"`, replacing `"Your commit message"` with a brief description of what you changed.
    - Press `Enter`.

3. **Push Your Changes:**
    - Type `git push` and press `Enter`. This command uploads your changes to GitHub.

    *Note: If you're pushing to a repository for the first time or if your credentials are not set up, you might be prompted to enter your GitHub username and password. This is provided in the PeerEd docs*

### Terms

React - 

### Troubleshooting

- If you encounter any errors during these steps, they are most likely due to missing installations or version incompatibilities. Ensure that Git and Node.js are installed properly. If the problem persists, searching the error message online often provides helpful community advice.
- The version control etiquette is to always pull the latest changes from the original repository before starting to work, especially if it's a collaborative project, to avoid conflicts. You can do this by running `git pull origin main` (replace 'main' with the appropriate branch name if different).

