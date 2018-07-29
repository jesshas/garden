// //Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const initializeDatabases = require('./db')
const routes = require('./routes')

const app = express();

initializeDatabases().then(dbs => {
    // Initialize the application once database connections are ready.
    routes(app, dbs).listen(process.env.PORT || 3000, () => console.log('Listening on port 3000'))
  }).catch(err => {
    console.error('Failed to make all database connections!')
    console.error(err)
    process.exit(1)
  })
  
  // setting body parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));