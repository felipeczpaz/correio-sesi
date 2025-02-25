/*
************************************************************
*                                                          *
*   Flowhooks Software - All Rights Reserved               *
*          (c) 2025 Felipe Cezar Zwerchowski Paz LTDA.     *
*                                                          *
*  This software is proprietary.                           *
*  Unauthorized use, reproduction, or distribution is      *
*  strictly prohibited.                                    *
*                                                          *
*  Author: Felipe Cezar Paz (git@felipecezar.com)          *
*  File:                                                   *
*  Description:                                            *
*                                                          *
************************************************************
*/
// routes/postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.post('/create', postController.createPost);
router.get('/user/:user_id', postController.getPostsByUserId);
router.delete('/delete/:post_id', postController.deletePost);

module.exports = router;
