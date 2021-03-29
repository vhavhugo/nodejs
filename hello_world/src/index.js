const express = require("express");

const { multiplication } = require("./utils/operatons");
const phone = require('phone');

const PORT = 5000;
const app = express();

app.listen(PORT, () => {
    console.log('running on', PORT);
});

app.get("/", (req, res) => {
    res.status(200).send("<html><head> <meta charset=\"utf-8\" /> </head> <body>Home</body></html>");
});
