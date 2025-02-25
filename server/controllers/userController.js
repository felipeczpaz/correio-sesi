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
// controllers/userController.js
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const userController = {
  register: async (req, res) => {
    const { email, username, password } = req.body;

    // Check if all required fields are provided
    if (!email || !username || !password) {
      return res.status(400).json({ message: 'Email, username, and password are required' });
    }

    try {
      // Check if the email already exists
      const existingUser = await new Promise((resolve, reject) => {
        User.getByEmail(email, (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        });
      });

      if (existingUser.length > 0) {
        return res.status(400).json({ message: 'Email already in use' });
      }

      // Hash the password using bcrypt
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create a new user with the hashed password (no verification code)
      User.create(email, username, hashedPassword, (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error during registration' });
    }
  },

  getUserByEmail: (req, res) => {
    const { email } = req.params;

    User.getByEmail(email, (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Filter out sensitive information
      const { password_hash, verification_code, email, ...userData } = rows[0];
      res.status(200).json(userData);
    });
  },

  getUserById: (req, res) => {
    const { id } = req.params;

    User.getById(id, (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Filter out sensitive information
      const { password_hash, verification_code, email, ...userData } = rows[0];
      res.status(200).json(userData);
    });
  }
};

module.exports = userController;
