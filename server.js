'use strict'

const express = require('express');
const newsRouter = require('./routes/news');
const app = express();

app.get('/', function(req, res) {
    res.json({"message" : "Simple REST API with Node.js"});
});

app.use('/news', newsRouter);


app.listen(3000, function() {
    console.log('Listening on localhost:3000');
});