// models/postModel.js
const db = require('../config/db');

const Post = {
  create: (user_id, post_content, is_anonymous, callback) => {
    const query = `
      INSERT INTO posts (user_id, post_content, is_anonymous)
      VALUES (?, ?, ?)
    `;
    db.query(query, [user_id, post_content, is_anonymous], callback);
  },
  getByUserId: (user_id, callback) => {
    const query = 'SELECT * FROM posts WHERE user_id = ? AND deleted_at IS NULL';
    db.query(query, [user_id], callback);
  },
  delete: (post_id, callback) => {
    const query = 'UPDATE posts SET deleted_at = NOW() WHERE id = ?';
    db.query(query, [post_id], callback);
  }
};

module.exports = Post;
