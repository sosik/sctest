var express = require('express');
var webApp = express();

webApp.all('/', function(req, res, next) {
	res.send('<html><head></head><body><h1>aaa</h1></body></html>');
});

var http = require('http');

http.createServer(webApp).listen(3000, 'localhost', function() {
	console.log('Http server started at http://localhost:3000');
});

