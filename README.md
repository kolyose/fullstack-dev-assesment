# Fullstack Assesment

The project consists of Back-end & Front-end applications stored in respective folders.

The `server` exposes sample data collections from a static JSON file via simple REST API. It's also responsible for serving static image files. 

List of third-party code used for the server:
- Node.js
- Koa2
- MongoDB/Mongoose
- Babel
- Prettier/ESlint & the eslint-config-airbnb
- Winston
- Jest/Supertest
- docker-compose

The `client` consumes the exposed data providing a simple user interface to display it in responsive manner. 

List of third-party code used for the client:
- create-react-app starter
- ReactJS
- React Router
- Redux
- Redux Sagas
- Redux Logger
- Material UI
- Axios
- Jest/Enzyme
- docker-compose
- nginx configuration file code snippet

## Installation

Before you start, please ensure you have [Docker](https://www.docker.com/) software installed on your system.

## Getting started

To launch any of the project applications please navigate to the corresponding folder and run the following command in your terminal window:

```
[sudo] docker-compose up
```

## Usage

After the building process has finished you can [open the app](http://localhost:8080/) in your browser.


## Running the tests

To launch any of the test suites please navigate to the corresponding folder and run the following command in your terminal window:

```
npm run test
```