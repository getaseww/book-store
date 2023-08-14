const {create,findAll}=require('../controllers/Book.controller');
const router=require('express').Router()


router.route('/book').post(create).get(findAll);

module.exports=router;