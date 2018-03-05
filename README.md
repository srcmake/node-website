# A Simple Node Website. 

This project holds a very simple Node Website example.

## Deployment

In your terminal:

npm install
node index.js

## Files

* package.json - Holds our libraries.
* Procfile - Used to start the project if we push it to Heroku.
* index.js - Starts our server.
* server.js - Holds our server code. Maps routing to be handled by other files.
* /routes - Folder to hold our route files.
* /routes/all_routes.js - Currently handles all routing for our website. (Maps URLs to functions to handle the appropariate response.)
* controllers - Holds the controller files, which contain the functions that send responses back to the web browser.
* controllers/home.js - Currently handles the response for our / (home) route.

## Libraries

* Express - Framework to handle routing and other server stuff.
* Body-Parser - Parses urls for us easier. 