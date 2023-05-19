
var express = require('express');
var router = express.Router();


const regster = require('../controllers/regster');
router.get('/server/regster',regster.regster_singup_get);
router.post('/server/postregser',regster.regster_regster_singup_post);
router.post('/server/checkdpasswordandemail',regster.checked_passwordandemail_regster);
module.exports = router;
