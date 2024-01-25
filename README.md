# Microfrontend with Webpack 5 using ReactJS

🚀 Welcome to the MicroFrontend project powered by Webpack 5! This setup is designed to provide a smooth experience in building MicroFrontend applications with "webpack5."

Your thoughts and suggestions are not just welcomed; they are highly valued.

## Key Features 🛠️

- **Implemented Features:**
  - Applications (APPs) are crafted to be isolated and operate independently. The host gracefully handles any offline APP.
  - Nested APP inside APP2.

- **Pending Features:**
  - Implementation of a shared state management system.

## Getting started
```
cd host && yarn install && yarn build:dev && yarn start
cd app1 && yarn install && yarn build:dev && yarn start
cd app2 && yarn install && yarn build:dev && yarn start
cd nested2 && yarn install && yarn build:dev && yarn start
```

- Open http://localhost:8080 to view Host
- Open http://localhost:8081 to view APP1
- Open http://localhost:8082 to view APP2
- Open http://localhost:8083 to view NESTED

## Reference Documentation 📖
Explore the [Webpack 5 documentation](https://webpack.js.org/concepts/module-federation/#motivation) for reference.

## Contributing 🤝

Feel free to submit pull requests; your contributions are highly valuable. For significant changes, please open an issue first to initiate a discussion about your proposed modifications.

## License 📝

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/). Your collaboration is not just appreciated; it's essential! Thank you for being a part of this project!
