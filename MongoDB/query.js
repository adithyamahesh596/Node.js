var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

//find the documents with specified address
MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var query = { address: "Park Lane 38"};
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});

//find the documents using regular expressions
MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var query = { address: /^S/ };
    dbo.collection("customers").find(query).toArray(function (err, result) {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});