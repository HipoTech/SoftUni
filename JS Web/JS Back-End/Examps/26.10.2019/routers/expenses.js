const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');
const courseValidator = require('../utils/validator')

router.get('/create', auth(), controllers.expenses.get.create);

router.post('/create', auth(),  controllers.expenses.post.create); // courseValidator

router.get('/report/:courseId', auth(), controllers.expenses.get.details);

router.get('/edit/:courseId', auth(), controllers.expenses.get.edit);

router.post('/edit/:courseId', auth(), courseValidator, controllers.expenses.post.edit);

router.get('/delete/:courseId', auth(), controllers.expenses.get.delete);

module.exports = router;