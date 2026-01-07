# OpenQA Platform

This repository contains both the backend (Spring Boot) and frontend (Next.js) for the OpenQA Platform.

---


## Prerequisites

- **Java 17+** (for backend)
- **Node.js 18+** and **npm** (for frontend)
- **Maven** (wrapper included, no need to install globally)

---

## OS-specific Setup

### Mac (macOS)
- Install [Homebrew](https://brew.sh/) if not already installed.
- Install Java 17: `brew install openjdk@17`
- Install Node.js: `brew install node`
- No need to install Maven globally (wrapper included).
- Use `./mvnw` for Maven commands.

### Windows
- Install [Java 17+](https://adoptium.net/) and add it to your PATH.
- Install [Node.js 18+](https://nodejs.org/).
- Use `mvnw.cmd` for Maven commands in Command Prompt, or `./mvnw` in Git Bash/WSL.
- If you see permission errors, run the terminal as Administrator or use Git Bash.

### Linux
- Install Java 17: `sudo apt update && sudo apt install openjdk-17-jdk`
- Install Node.js: `sudo apt install nodejs npm` (or use NodeSource for latest)
- Use `./mvnw` for Maven commands.

---


## Backend (Spring Boot)

### Steps to Run
1. Open a terminal and navigate to the project root.
2. Change directory to the backend:
   ```bash
   cd openqa-backend
   ```
3. Build and run the backend:
   - **Mac/Linux:**
     ```bash
     ./mvnw clean install
     ./mvnw spring-boot:run
     ```
   - **Windows (Command Prompt):**
     ```cmd
     mvnw.cmd clean install
     mvnw.cmd spring-boot:run
     ```
   - **Windows (Git Bash/WSL):**
     ```bash
     ./mvnw clean install
     ./mvnw spring-boot:run
     ```
   The backend will start on [http://localhost:8080](http://localhost:8080).

### Debugging Tips
- If you see Java version errors, ensure you are using Java 17 or higher (`java -version`).
- If Maven fails, try deleting the `.m2/repository` folder and re-running the build.
- On Windows, if you get script execution errors, try running from Git Bash or WSL.
- Logs will appear in the terminal. Look for `Started OpenqaBackendApplication` for a successful start.

---


## Frontend (Next.js)

### Steps to Run
1. Open a new terminal and navigate to the project root.
2. Change directory to the frontend:
   ```bash
   cd openqa-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will start on [http://localhost:3000](http://localhost:3000).

### Production Build
To build and run in production mode:
```bash
npm run build
npm start
```

### Debugging Tips
- If you see errors about missing modules, re-run `npm install`.
- If the port is in use, either stop the other process or change the port in `package.json` or with `PORT=xxxx npm run dev`.
- For TypeScript or ESLint errors, check the terminal output for details.
- On Windows, if you get permission errors, try running the terminal as Administrator.

---


## General Notes
- Backend and frontend run independently. Make sure both are running for full functionality.
- API endpoints are served from the backend at port 8080; frontend runs on port 3000 by default.
- For CORS or API connection issues, check browser console and backend logs.
- On Windows, prefer using Git Bash or WSL for Unix-like commands if you encounter issues in Command Prompt.

---

## Useful Commands

### Backend
- Build: `./mvnw clean install`
- Run: `./mvnw spring-boot:run`

### Frontend
- Install dependencies: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Start production: `npm start`

---

## Contact
For issues or questions, please open an issue in this repository.
