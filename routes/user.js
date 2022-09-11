const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


// router.post('/register', userController.getRegister) // user register
router.post('/login', userController.getLogin) // login user
router.post('/token', userController.getToken) // create token
router.delete('/logout', (userController.getLogOut)) // logout user

module.exports = router