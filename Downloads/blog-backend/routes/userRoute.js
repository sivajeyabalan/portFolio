const express = require('express');
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');
router.get('/users', )
module.exports = router;  // Ensure this is exporting the router
