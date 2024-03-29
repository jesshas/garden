const nodemon = require("nodemon");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require('body-parser');
const express = require("express");
const app = express();

const GARDEN_URI = "mongodb://jesshas:daisydog7@ds141621.mlab.com:41621/jessdb";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
var collection;
// Connect to the database before starting the application server.
MongoClient.connect(GARDEN_URI, function(err, client) {
    if (err) {
      console.log('connection error: ', err);
    }

    // Save database object from the callback for reuse.
    db = client.db();
    collection = db.collection('sensor'); 

    app.listen(process.env.PORT || 8080);
  }
);



app.get('/garden', function(req, res) {
  getData(res);
});

function getData(res) {
  collection.find({}).toArray(function(err, docs) {
    console.log(docs);
    res.status(200).json(docs);
  });
};


app.post('/plant', function(req, res) {
  const reqBody = req.body;
  console.log(reqBody);

});



// function getData(req) {
//   //retrieve all records
//   collection.find({}).toArray(function(err, docs) {
//     if (err) throw err;
//     var sensornameArray = [];
//     var moistureLevel = [];
//     var lightVolt = [];
//     var phLevel = [];

//     for (index in docs) {
//       var doc = docs[index];
//       //category array
//       var sensorName = doc["sensorname"];
//       //series 1 values array
//       var moisture = doc["moisture"];
//       //series 2 values array
//       var light = doc["light"];
//       //series 3 values array
//       var ph = doc["ph"];
//       sensornameArray.push({ label: sensorName });
//       moistureLevel.push({ value: moisture });
//       lightVolt.push({ value: light });
//       phLevel.push({ value: ph });
//     }

//     var dataset = [
//       {
//         seriesname: "Moisture",
//         data: moistureLevel
//       },
//       {
//         seriesname: "Light",
//         data: lightVolt
//       },
//       {
//         seriesname: "pH",
//         data: phLevel
//       }
//     ];

//     var response = {
//       dataset: dataset,
//       categories: sensornameArray
//     };
//   });

//   return response;
// }
