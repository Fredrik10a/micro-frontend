# Microfrontend Fundamental Setup using Webpack5

🚀 Welcome to the MicroFrontend Fundamental Setup repository, powered by Webpack 5! This setup is meticulously crafted to ensure a seamless MicroFrontend experience with the confirmed reliability of "webpack5."

Your insights and suggestions for refinement are not just welcomed but highly valued. Our objective is to maintain simplicity while guaranteeing practical applicability in real-life scenarios.

## Features 🛠️

- **Implemented**
  - APPs are designed to be isolated and work independently. The host gracefully handles any offline APP without throwing errors.

- **Not Implemented**
  - All nodes sharing a common `styles.css`.
  - All nodes sharing some form of state management.

## Getting started

cd host && yarn install && yarn build:dev && yarn start
cd app1 && yarn install && yarn build:dev && yarn start
cd app2 && yarn install && yarn build:dev && yarn start

Open http://localhost:8080 to view Host
Open http://localhost:8081 to view APP1
Open http://localhost:8082 to view APP2

## Contributing 🤝

Feel free to submit pull requests. For significant changes, it's advisable to open an issue first to initiate a thoughtful discussion and coordinate proposed modifications.

## License 📝

This project operates under the [MIT License](https://choosealicense.com/licenses/mit/). Your collaboration is not just welcomed; it's crucial—thank you for being a part of this journey!
