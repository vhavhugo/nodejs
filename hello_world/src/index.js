const http = require('http');
//var operation = require("./utils/operatons");
const { multiplication } = require("./utils/operatons");

const PORT = 5000;
const apikey = "assasassassasas";

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html><head> <meta charset=\"utf-8\" /> </head> <body>Holá Mundo</body></html>");
    response.end();
});
//console.log("addition", operation.addition(3,5));
//console.log("multiplication", operation.multiplication(3,5));
console.log("multiplication", multiplication(3,5));

server.listen(PORT);