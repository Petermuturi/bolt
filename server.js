var express = require ('express');
 var app = express();
 var http = require ('http');

app.use(express.static(__dirname + "/public"));
	
// app.get('/products', function(req, res){
//    console.log("I recieved");
   
//    hair = {
// 		image : "image1",
// 		description : "description1",
// 		price : "cost1", 
// 		tax : "tax1"
// 	};
// 	body = {
// 		image : "image2",
// 		description : "description2",
// 		price : "cost2", 
// 		tax : "tax2"
// 	};
// 	face = {
// 		image : "image3",
// 		description : "description3",
// 		price : "cost3", 
// 		tax : "tax3"
// 	};

// 	var products = [hair, body, face];
// 	res.json(products);
// });

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(app);
});

var port = Number(process.env.PORT || 8081);

server.listen(8000);
 app.listen(port);
 console.log("Server by Peter");