const validate = require('../middlewares/validateUser') // middleware
const userModal = require('../models/userModel') // user model
const bcrypt = require('bcryptjs'); // password encript


// handle errors
const handleErrors = (err) => {
    let errors = { userName: '', password: '' }
    if (err.message.includes('userauths validation failed')) {
        const newErr = Object.values(err.errors)
        newErr.forEach((data) => {
            errors[data.properties.path] = data.properties.message
        })
        return errors

    }

}

// find user by name
module.exports.findByUser = function (username, callback) {
    const query = { userName: username }
    userModal.findOne(query, callback)
}


// get user count
module.exports.getUserCount = function (user, callback) {
    const tempRole = (user.active == 'true') ? 'admin' : 'editor'
    var regex = new RegExp(user.search, 'i')
    const query = { firstName: regex }
    const query2 = { lastName: regex }
    const query3 = { role: tempRole }
    userModal.find({
        "$and": [{ "$or": [query, query2] }, { "$or": [query3] }]
    }, callback)
}

// user register
module.exports.createNewUser = (req, res) => {
    let newUser = new userModal(req.body)
    this.findByUser(newUser.userName, async (err, found) => {

        if (err) throw err
        if (found) {
            res.status(400).json({ state: false, msg: 'username already exsist!' })
        }
        if (!found) {
            try {
                const savedUser = await newUser.save()
                res.status(201).json({ state: true, msg: 'user saved successfully' })
            }
            catch (error) {
                const errors = handleErrors(error)
                res.status(400).json({ state: false, msg: errors })
            }
        }
    })
}

// change role as editor
module.exports.inActivateUser = async (req, res) => {
    const uId = req.params.id
    const query = { _id: uId }
    try {
        await userModal.updateOne(query, { role: 'editor' })
        res.status(200).json({ state: true, msg: 'change editor successfully' })

    } catch {
        res.status(400).json({ state: false, msg: 'change editor unsuccessfully' })
    }
}
// change role as admin
module.exports.activateUser = async (req, res) => {
    const uId = req.params.id
    const query = { _id: uId }
    try {
        await userModal.updateOne(query, { role: 'admin' })
        res.status(200).json({ state: true, msg: 'change admin successfully' })

    } catch {
        res.status(400).json({ state: false, msg: 'change admin  unsuccessfully' })
    }
}

module.exports.getAllusers = (req, res) => {
    const user = req.query;
    const pageSize = user.pageSize;
    const pageNumber = user.pageNumber;
    this.getUserCount(user, (err1, counts) => {
        if (err1) throw err1
        if (counts) {
            const data = counts.slice((pageSize * (pageNumber - 1)), (pageSize * pageNumber))
            res.send({ user: data, count: counts.length })
        }
    })
}


