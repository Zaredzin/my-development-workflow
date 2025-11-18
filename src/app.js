const express = require('express');

const app = express();

app.use(express.json());

// Serve a simple static frontend from the `public` directory
app.use(express.static('public'));

const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

module.exports = app;