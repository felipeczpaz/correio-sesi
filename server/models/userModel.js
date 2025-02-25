// models/userModel.js
const db = require('../config/db');

const User = {
  create: (email, username, password_hash, callback) => {
    const query = `
      INSERT INTO users (email, username, password_hash)
      VALUES (?, ?, ?)
    `;
    db.query(query, [email, username, password_hash], callback);
  },
  getByEmail: (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = User;
