var url = require('url');
var http = require('http');
var fs = require('fs');

//Splitting a web address in to readable parts
var adr = 'http://localhost:8080/default.htm?year=2018&month=january';
var q = url.parse(adr. true);

var data = q.query;   //returns an object
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

//Serve the file requested by the clientInformation

http.createServer(function (req,res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);