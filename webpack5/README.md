# Microfrontend with Webpack 5

🚀 Welcome to the MicroFrontend project powered by Webpack 5! This setup is designed to provide a smooth experience in building MicroFrontend applications with "webpack5."

Your thoughts and suggestions are not just welcomed; they are highly valued.

## Key Features 🛠️

- **Implemented Features:**
  - Applications (APPs) are crafted to be isolated and operate independently. The host gracefully handles any offline APP.

- **Pending Features:**
  - Shared styling through a common `styles.css`.
  - Implementation of a shared state management system.

## Getting started
```
cd host && yarn install && yarn build:dev && yarn start
cd app1 && yarn install && yarn build:dev && yarn start
cd app2 && yarn install && yarn build:dev && yarn start
```

- Open http://localhost:8080 to view Host
- Open http://localhost:8081 to view APP1
- Open http://localhost:8082 to view APP2
