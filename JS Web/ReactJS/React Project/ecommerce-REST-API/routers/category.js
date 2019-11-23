const router = require('express').Router();
const controllers = require('../controllers');
// const auth = require('../utils/auth');

router.post('/create', controllers.category.post.create);
router.get('/getAll', controllers.category.get.all);
router.post('/getOne', controllers.category.post.findOne);


module.exports = router;