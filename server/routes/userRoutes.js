// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/register', userController.register);
router.get('/user/:email', userController.getUserByEmail);
router.get('/user/id/:id', userController.getUserById);

module.exports = router;
