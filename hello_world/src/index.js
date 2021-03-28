var http = require('http');
var operation = require("./operatons");

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html><head> <meta charset=\"utf-8\" /> </head> <body>Holá Mundo</body></html>");
    response.end();
});
console.log("addition", operation.addition(3,5));
console.log("multiplication", operation.multiplication(3,5));

server.listen(5000);