var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//deleting a collection using dropCollection();
MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.dropCollection("customers", function(err, res) {
        if(err) throw err;
        if(res) console.log("Collection deleted");
        db.close();
    });
});

//deleting a collection using drop();
MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").drop(function(err, res) {
        if(err) throw err;
        if(res) console.log("Collection deleted");
        db.close();
    });
});