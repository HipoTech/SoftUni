const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');

router.post('/create', auth(), controllers.brand.post.create);
router.get('/getAll', controllers.brand.get.all);
router.post('/getOne', controllers.brand.post.findOne);
router.put('/edit', auth(), controllers.brand.put.edit);
router.delete('/delete', auth(), controllers.brand.delete.deleteBrand);


module.exports = router;