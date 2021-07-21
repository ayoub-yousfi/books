const bookdb = require("../model/model");
const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/";

bookdb.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "alchemist", address: "Paulo Coelho" };
  dbo.collection("books").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

/*//create book
const book = new bookdb({
  name: "alchemist",
  writer: "Paulo Coelho",
  genre: "philosophical",
});
book.save();

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
*/
