const express = require('express');
const data = require('./data.json');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the API!');
});
app.get('/data', (req, res) => {
  res.status(200).json(data);
});

module.exports = app;