const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')
const validate = require('../middlewares/validateUser')


router.post('/', validate.varyToken, categoryController.createCategory) // create category
router.get('/', validate.varyToken, categoryController.getAllCategory) // get category by admin
router.get('/user', categoryController.getAllCategory) // get category by user
router.delete('/:id', validate.varyToken, categoryController.deleteCategory) // delete category

module.exports = router