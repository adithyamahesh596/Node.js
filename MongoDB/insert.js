var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbc = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbc.collection("customers").insertOne(myobj, function(err, res) {
        if(err) throw err;
        console.log("Inserted 1 document");
        db.close();
    })
})