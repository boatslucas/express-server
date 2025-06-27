/*const express = require("express");*/
/*const app = express();*/
const app = require('./app.ts');

/*app.get("/", (req, res) => res.send("Express on Vercel"));*/

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;