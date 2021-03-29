const http = require('http');
//var operation = require("./utils/operatons");
const { multiplication } = require("./utils/operatons");

const PORT = 5000;
const apikey = "assasassassasas";

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/":
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<html><head> <meta charset=\"utf-8\" /> </head> <body>Home</body></html>");  
            break;
        case "/info":
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify({"version": "0.0.1", "appName": "Curso de NodeJS"}));  
            break;  
        case "/detail":
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<html><head> <meta charset=\"utf-8\" /> </head> <body>Detail</body></html>");  
            break;  
        default:
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write("<html><head> <meta charset=\"utf-8\" /> </head> <body>NOT FOUND</body></html>");  

    }

    res.end();
});
//console.log("addition", operation.addition(3,5));
//console.log("multiplication", operation.multiplication(3,5));
console.log("multiplication", multiplication(3,5));

server.listen(PORT);