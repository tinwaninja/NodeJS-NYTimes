const express = require('express');
const router = express.Router();
const newsController = require('../app/api/controllers/news');

router.get('/', newsController.getAll);

module.exports = router;