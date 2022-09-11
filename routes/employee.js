const express = require('express')
const validate = require('../middlewares/validateUser')
const router = express.Router();
const employeeController = require('../controllers/employeeController')

// register user
router.post('/', validate.varyToken, employeeController.createNewUser)

//get users
router.get('/', validate.varyToken, employeeController.getAllusers)


// change editor
router.delete('/editor/:id', validate.varyToken, employeeController.inActivateUser)

// change admin
router.delete('/admin/:id', validate.varyToken, employeeController.activateUser)

router.get('/test', validate.varyToken, (req, res) => {
    res.json(req.user)
})

module.exports = router