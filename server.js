'use strict'

const express = require('express');
const newsRouter = require('./routes/news');
const booksRouter = require('./routes/books');
const helmet = require("helmet");
const app = express();
app.use(helmet());

app.get('/', function(req, res) {
    res.json({"message" : "NY Times Node.js"});
});

app.use('/news', newsRouter);
app.use('/books', booksRouter);

app.listen(3000, function() {
    console.log('Listening on localhost:3000');
});