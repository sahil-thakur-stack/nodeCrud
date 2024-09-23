// app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Import the routes

const app = express();

app.use(bodyParser.json());

// Use the routes
app.use(routes);

module.exports = app;
