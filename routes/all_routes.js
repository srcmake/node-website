var express = require('express');
var router = express.Router();

var home = require('../controllers/home');

/* Handle each webpage function here. */

router.get('/', home.home);
router.get('/contact', home.contact);

module.exports = router;