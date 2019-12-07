const router = require('express').Router();
const controllers = require('../controllers');
// const auth = require('../utils/auth');

router.post('/create', controllers.brand.post.create);
router.get('/getAll', controllers.brand.get.all);
router.post('/getOne', controllers.brand.post.findOne);
router.put('/edit', controllers.brand.put.edit);
router.delete('/delete', controllers.brand.delete.deleteBrand);


module.exports = router;