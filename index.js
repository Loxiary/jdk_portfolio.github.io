const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path')
const os = require("os")

const app = express();
app.use(express.static(__dirname + '/public'));

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/main.html'));
});
