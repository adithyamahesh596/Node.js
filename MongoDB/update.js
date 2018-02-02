var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

//Updating a specific document where only first occurence is updated.
MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Lincoln Street" };
    var newvalues = { name:"AD", address: "Colony Park"};
    dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
        if(err) throw err;
        console.log("Document updated");
        db.close();
    });
});

//Updating selected fields using $set operator
MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Lincoln Street" };
    var newvalues = { $set: { address: "Colony Park" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
        if(err) throw err;
        console.log("Specific field in a document updated");
        db.close();
    });
});