const express = require("express");
/*const app = express();*/
//const app = require('./app.ts');
const app = express();

const data = require('./data.json');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the API!');
});
app.get('/data', (req, res) => {
  res.status(200).json(data);
});
/*app.get("/", (req, res) => res.send("Express on Vercel"));*/

app.listen(3000, () => console.log("Server ready on port 3000."));

//module.exports = app;