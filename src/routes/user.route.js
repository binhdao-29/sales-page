const express = require('express');
const controller = require('../controllers/user.controller');

const router = express.Router();
router.post('/signup', controller.post);
router.get('/', controller.get);

module.exports = router;