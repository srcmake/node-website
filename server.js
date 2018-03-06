var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Store our all_routes file in the variable named "routes".
var routes = require('./routes/all_routes');

// Tell our server to use the all_routes file for all incoming requests that start with "/".
// (Which is all requests/webpages/)
app.use('/', routes);

// We can be more specific or add other routes. For example....
// app.use('/ice-cream');
// will handle all paths that begin with "www.srcmake.com/ice-cream".
// Useful for separating code logic.

module.exports = app;