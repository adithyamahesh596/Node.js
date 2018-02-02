var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//sort the result alphabetically by name
MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var mysort = { name: 1 }; // 1 for ascending and -1 for descending
    dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});