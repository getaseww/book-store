const {create,findAll}=require('../controllers/Book.controller');
const { protect } = require('../middleware/auth');
const router=require('express').Router()


router.route('/book').post(create).get(protect,findAll);

module.exports=router;