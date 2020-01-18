const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');

router.post('/create', auth(), controllers.product.post.create);
router.get('/getAll', controllers.product.get.all);
router.post('/getOne', controllers.product.post.findOne);
router.put('/edit', auth(), controllers.product.put.edit);
router.delete('/delete', auth(), controllers.product.delete.deleteProduct);


module.exports = router;