const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');

// Register
router.get('/register', controllers.user.get.register);
router.post('/register', controllers.user.post.register);

// Login
router.get('/login', controllers.user.get.login);
router.post('/login', controllers.user.post.login);

// Logout
router.get('/logout', controllers.user.get.logout);

router.get('/details/:id',auth(), controllers.user.get.details);

router.post('/refill', auth(), controllers.user.post.refill);

module.exports = router;