const express = require('express');
const router = express.Router();
const booksController = require('../app/api/controllers/books');

router.get('/:listBuku', booksController.getCari);
module.exports = router;