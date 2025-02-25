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
// controllers/postController.js
const Post = require('../models/postModel');

const postController = {
  createPost: (req, res) => {
    const { user_id, post_content, is_anonymous } = req.body;

    Post.create(user_id, post_content, is_anonymous, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
    });
  },

  getPostsByUserId: (req, res) => {
    const { user_id } = req.params;

    Post.getByUserId(user_id, (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(rows);
    });
  },

  deletePost: (req, res) => {
    const { post_id } = req.params;

    Post.delete(post_id, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json({ message: 'Post deleted successfully' });
    });
  }
};

module.exports = postController;
