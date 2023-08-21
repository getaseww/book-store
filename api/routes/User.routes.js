const router=require('express').Router()
const {create,login, findAll}=require('../controllers/User.controller')
const { generateToken } = require('../middleware/auth')

router.route('/user').post(create).get(findAll)
router.route('/login').post(generateToken,login);

module.exports=router

