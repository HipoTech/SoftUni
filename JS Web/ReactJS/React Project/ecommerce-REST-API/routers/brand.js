const router = require('express').Router();
const controllers = require('../controllers');
// const auth = require('../utils/auth');

router.post('/create', controllers.brand.post.create);
router.get('/getAll', controllers.brand.get.all);
router.post('/getOne', controllers.brand.post.findOne);


module.exports = router;