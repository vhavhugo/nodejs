var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html><body>Hola Mundo</body></html>");
    response.end();
});

server.listen(5000);