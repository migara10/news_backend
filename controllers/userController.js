const validate = require('../middlewares/validateUser')
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs');
require('dotenv').config()

let refreshTokens = [];
// handle errors
const handleErrors = (err) => {
    if (err.message.includes('userauths validation failed')) {
        const newErr = Object.values(err.errors)
        /* newErr.forEach((data) => {
            console.log(data.properties.message[0])
            errors[data.properties.path] = data.properties.message
        }) */
        return newErr[0].properties.message

    }

}
// find user by name
module.exports.findByUser = async function (username, callback) {
    const query = { userName: username }
    userModel.findOne(query, callback)
}


module.exports.getRegister = (req, res) => {
    let newUser = new userModel(req.body)
    this.findByUser(newUser.userName, async (err, found) => {

        if (err) throw err
        if (found) {
            res.status(400).json({ state: false, msg: 'username already exsist!' })
        }
        if (!found) {
            try {
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(newUser.password, salt, function (err, hash) {
                        if (err) throw err
                        if (hash) {
                            newUser.password = hash;
                        }
                    });
                });
                const savedUser = await userModel.create(newUser)
                res.status(201).json({ state: true, msg: 'user saved successfully' })
            }
            catch (error) {
                const errors = handleErrors(error)
                res.status(400).json({ state: false, msg: errors })
            }
        }
    })
}

module.exports.getLogin = (req, res) => {
    const newUser = new userModel({
        userName: req.body.userName,
        password: req.body.password
    })
    validate.CheckUserIsValid(newUser, (error, validUser) => {
        if (error) throw error
        if (!validUser) {
            res.status(400).json({ state: false, msg: "Invalid User" })
        }
        if (validUser) {
            validate.checkPassword(newUser.password, validUser.password, (err, foundUser) => {
                if (err) throw err
                if (!foundUser) {
                    res.status(400).json({ state: false, msg: "Password not match!" })
                }
                if (foundUser) {
                    const user = { name: validUser.userName };
                    const accessToken = jwt.sign(user, process.env.TOKEN_KEY, { expiresIn: '10m' })
                    const refreshToken = jwt.sign(user, process.env.REFRESH_KEY, { expiresIn: '20m' })
                    refreshTokens.push(refreshToken)
                    res.send({ accessToken, refreshToken, validUser })
                }
            })
        }
    })
}

module.exports.getToken = (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (refreshToken == null) res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) res.sendStatus(401)
    jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, user) => {
        if (err) res.sendStatus(401)
        const accessToken = jwt.sign({ name: user.name }, process.env.TOKEN_KEY, { expiresIn: '10m' })
        res.send({ accessToken })
    })
}

module.exports.getLogOut = (req, res) => {
    const refreshToken = req.body.refreshToken;
    refreshTokens = refreshTokens.filter(t => t !== refreshToken)
    res.sendStatus(204)
}

