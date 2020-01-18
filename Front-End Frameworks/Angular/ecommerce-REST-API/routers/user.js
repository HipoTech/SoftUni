const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');

// Register
router.post('/register', controllers.user.post.register);

// Login
router.post('/login', controllers.user.post.login);

// Logout
router.get('/logout', controllers.user.get.logout);

router.get('/auth', controllers.user.get.auth);

module.exports = router;