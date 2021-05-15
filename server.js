//Following express/node.js tutorial here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

//Express variables initialization
const express = require("express")
const app = express();
const port = 8000;

//Routing for URL
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//Set express "app" to start listening, also outputs where express is listening with host and port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`) //The backticks in the `Example app listening on port ${port}!` let us interpolate the value of $port into the string.
  });