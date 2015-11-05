var express = require ('express');
 var app = express();
 var http = require ('http');

app.use(express.static(__dirname + "/public"));
	

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(app);
});

var port = Number(process.env.PORT || 8000);

server.listen(8011);
 app.listen(port);
 console.log("Server by Peter");