const express = require('express');
const controller = require('../controllers/product.controller');

const router = express.Router();
router.get('/', controller.show);
module.exports = router;