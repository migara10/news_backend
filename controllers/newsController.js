const validate = require('../middlewares/validateUser') // middleware
const newsModel = require('../models/newsModel') // news model


// handle errors
const handleErrors = (err) => {
    let errors = { author: '', category: '' }
    if (err.message.includes('news validation failed')) {
        const newErr = Object.values(err.errors)
        newErr.forEach((data) => {
            errors[data.properties.path] = data.properties.message
        })
        return errors

    }
}

// create news
module.exports.createNews = async (req, res) => {
    // let newNews = new newsModel(req.body)
    console.log(req.body)
    const newNews = new newsModel({
        author: req.body.author,
        category: req.body.category,
        heading: req.body.heading,
        content: req.body.content,
        imgUri: req.file.path.replace(/\\/g, "/"),
    })
    try {
        console.log(req.file)
        const savedUser = await newsModel.create(newNews)
        res.status(201).json({ state: true, msg: 'news saved successfully' })
    }
    catch (error) {
        const errors = handleErrors(error)
        res.status(400).json({ state: false, msg: errors })
    }
}

// get user count
module.exports.getUserCount = function (news, callback) {
    var regex = new RegExp(news.search, 'i')
    const query = { heading: regex }
    const query2 = { category: regex }
    const query3 = { isDeleted: news.active }
    newsModel.find({
        "$and": [{ "$or": [query, query2] }, { "$or": [query3] }]
    }, callback)
}
// edit news
module.exports.editNews = async (req, res) => {
    let newNews = new newsModel(req.body)
    const uId = req.params.id
    try {
        const query = { _nId: uId }
        await newsModel.updateOne(query, newNews)
        res.status(200).json({ state: true, msg: 'news update successfully' })
    } catch {
        res.status(400).json({ state: false, msg: 'news update unsuccessfully' })
    }
}
// get news
module.exports.getAllNews = (req, res) => {
    const news = req.query;
    const pageSize = news.pageSize;
    const pageNumber = news.pageNumber;
    this.getUserCount(news, (err1, counts) => {
        if (err1) throw err1
        if (counts) {
            const data = counts.slice((pageSize * (pageNumber - 1)), (pageSize * pageNumber))
            res.send({ news: data, count: counts.length })
        }
    })
}

// unpublish news
module.exports.unPublishNews = async (req, res) => {
    const uId = req.params.id
    try {
        const query = { _nId: uId }
        await newsModel.updateOne(query, { isDeleted: false })
        res.status(200).json({ state: true, msg: 'news unpublish successfully' })
    } catch {
        res.status(400).json({ state: false, msg: 'news unpublish unsuccessfully' })
    }
}

// publish news
module.exports.publishNews = async (req, res) => {
    const uId = req.params.id
    try {
        const query = { _nId: uId }
        await newsModel.updateOne(query, { isDeleted: true })
        res.status(200).json({ state: true, msg: 'news publish successfully' })
    } catch {
        res.status(400).json({ state: false, msg: 'news publish unsuccessfully' })
    }
}
