const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');

router.post('/create', auth(), controllers.category.post.create);
router.get('/getAll', controllers.category.get.all);
router.post('/getOne', controllers.category.post.findOne);
router.put('/edit', auth(), controllers.category.put.edit);
router.delete('/delete', auth(), controllers.category.delete.deleteCategory);


module.exports = router;