const express = require("express");
const bodyParser = require('body-parser');
const phone = require('phone');
const { multiplication } = require("./utils/operatons");


const PORT = 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send("<html><head> <meta charset=\"utf-8\" /> </head> <body>Home</body></html>");
});

app.get("/info", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({version: "0.0.1", appName: "Curso Node.js"}));
});

app.get("/detail", (req, res) => {
    res.status(200).send("DETAIL");
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    if(username === "hugo", password === "123456"){
        res.send({ status: "ok"});
    }else{
        res.status(401).send("Acess denied");
    }
    
});

app.get("/phone", (req, res) => {
    try {
        const query = req.query;
        const {value, country} = req.query;
        const result = phone(value, country.toUpperCase());
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(JSON.stringify(e.message));
    }
});

app.use((req, res) => {
    res.status(404).send("NOT FAULT");
});

app.listen(PORT, () => {
    console.log('running on', PORT);
});