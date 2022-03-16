const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controller/userController');
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser);
router.post('/login', loginUser);

//protect is for running our middleware function
router.get('/me', protect, getMe);

module.exports = router;
