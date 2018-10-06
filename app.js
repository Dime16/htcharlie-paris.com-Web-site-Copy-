const express = require("express");
const app = express();
var path = require('path');

const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "/");

app.use(express.static(publicPath));

app.get("/", (req, res, next) => {
     res.sendFile('index.html');
});

app.get("/forHim", (req, res, next) => {
    res.sendFile(publicPath + "forHim.html");
});

app.get("/watch", (req, res, next) => {
    res.sendFile(publicPath + "/watch.html");
});

app.get("/concordia", (req, res, next) => {
    res.sendFile(publicPath + "/concordia.html");
});

app.get("/forHim", (req, res, next) => {
    res.sendFile(publicPath + "/forHim.html");
});

app.get("/forHer", (req, res, next) => {
    res.sendFile(publicPath + "/forHer.html");
});

app.listen(port, () => {
    console.log("Server running on port 3000");
});