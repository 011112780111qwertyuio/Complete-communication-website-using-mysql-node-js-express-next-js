var express = require('express');
var router = express.Router();
const sing = require('../controllers/sign');
router.post('/server/sing',sing.sign_singin_post);
module.exports = router;