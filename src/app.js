const express = require('express');

const app = express();

app.use(express.json());

const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

module.exports = app;