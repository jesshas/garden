const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

const GARDEN_URI = "mongodb://jesshas:daisydog7@ds141621.mlab.com:41621/jessdb";

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
var collection;
// Connect to the database before starting the application server.
MongoClient.connect(GARDEN_URI, function (err, client) {
  if (err) {
    console.log(err);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  collection = db.collection('sensor');
  //console.log("Database connection ready", collection);
  
  app.listen(process.env.PORT || 8080);
});

app.get('/garden', function (req, res) {
    collection.find({}).toArray((err, docs) => {
        if (err) {
          console.log(err)
          res.error(err)
        } else {
          res.json(docs)
        }
      });
});