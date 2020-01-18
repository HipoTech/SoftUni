const router = require('express').Router();
const controllers = require('../controllers');
// const auth = require('../utils/auth');

router.post('/create', controllers.product.post.create);
router.get('/getAll', controllers.product.get.all);
router.post('/getOne', controllers.product.post.findOne);
router.put('/edit', controllers.product.put.edit);
router.delete('/delete', controllers.product.delete.deleteProduct);


module.exports = router;