const router=require('express').Router()
const {create}=require('../controllers/User.controller')

router.route('/user').post(create)

module.exports=router

