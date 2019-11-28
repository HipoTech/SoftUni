const router = require('express').Router();
const controllers = require('../controllers');
// const auth = require('../utils/auth');

// Register
router.post('/register', controllers.user.post.register);

// // Login
router.post('/login', controllers.user.post.login);

// // Logout
router.get('/logout', controllers.user.get.logout);

// router.get('/details/:id',auth(), controllers.user.get.details);

// router.post('/refill', auth(), controllers.user.post.refill);

module.exports = router;