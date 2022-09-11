// const mondoose = require(mongoose)
const bcrypt = require('bcryptjs');
const userModal = require('../models/userModel')
const jwt = require('jsonwebtoken');
require('dotenv').config()



module.exports.checkPassword = function (password, encript, callback) {
    bcrypt.compare(password, encript, function (err, res) {
        if (err) throw err
        if (res) {
            callback(null, res)
        }
        if (!res) {
            callback(null, res)
        }
    });
}

module.exports.CheckUserIsValid = function (user, callback) {
    const query = { userName: user.userName }
    userModal.findOne(query, callback)

}

module.exports.saveUser = function (user, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) throw err
            if (hash) {
                user.password = hash;
                user.save(callback)
            }
        });
    });
}

module.exports.varyToken = function (req, res, next) {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1];
        if (token == null) res.sendStatus(401)
        jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
            if (err) res.sendStatus(403)
            else {
                req.user = user
                next()
            }
        })
    } else {
        res.sendStatus(401)
    }
}