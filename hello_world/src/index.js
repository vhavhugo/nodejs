const http = require('http');
const url = require('url');
//var operation = require("./utils/operatons");
const { multiplication } = require("./utils/operatons");
const phone = require('phone');

const PORT = 5000;
const apikey = "assasassassasas";

const server = http.createServer((req, res) => {
    console.log(req.url);
    const urlData = url.parse(req.url, true);
    const path = urlData.pathname;
    const query = urlData.query;
    console.log("path",path);
    console.log("query", query);

    switch(path){
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
        case "/phone":
            try {
                const result = phone(query.value, query.country);
                res.writeHead(200, {"Content-Type": "application/json"});
                res.write(JSON.stringify(result));  
            } catch (e) {
                res.writeHead(400, {"Content-Type": "text/html"});
                res.write(e.message);
            }
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