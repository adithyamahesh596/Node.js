var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection('orders').aggregate([
        { $lookup:
            {
               from: 'products',
               localField: 'product_id',
               foriegnField: '_id',
               as: 'orderdetails'
            }
        }
    ], function (err, res) {
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});