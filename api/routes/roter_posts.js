const express = require('express');
const router = express.Router();
const control_posts = require ('../controllers/posts_control');
router.get('/server/showposts',control_posts);


module.exports =router;