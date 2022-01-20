//Following express/node.js tutorial here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

//Express variables initialization
const express = require("express")
const app = express();
const port = 8000;

// set the view engine to ejs
app.set('view engine', 'ejs');

//Enables the serving of static files
app.use(express.static(__dirname + '/public'));

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// Peru page
app.get('/peru', function(req,res) {
    res.render('pages/peru');
});

// test page
app.get('/test', function(req,res) {
    res.render('pages/test');
})

// test page
app.get('/china', function(req,res) {
    res.render('pages/china');
})



//Set express "app" to start listening, also outputs where express is listening with host and port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`) //The backticks in the `Example app listening on port ${port}!` let us interpolate the value of $port into the string.
  });