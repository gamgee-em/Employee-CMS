//! Use connection.js to make connection to mysql
//* run command < server.js to connect to server >
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);