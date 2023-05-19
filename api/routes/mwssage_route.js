const express = require('express');
const router = express.Router();
const messgae = require('../controllers/message_control');
router.post("/server/messgae",messgae.post_data_message);
router.get("/server/show",messgae.get_showmessage_home);

module.exports =router;