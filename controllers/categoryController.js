const validate = require('../middlewares/validateUser') // middleware
const categoryModel = require('../models/categoryModel') // category model


// handle errors
const handleErrors = (err) => {
    let errors = { title: '', value: '' }
    if (err.message.includes('category validation failed')) {
        const newErr = Object.values(err.errors)
        newErr.forEach((data) => {
            errors[data.properties.path] = data.properties.message
        })
        return errors

    }
}

// find category by value
module.exports.checkCategory = async function (value, callback) {
    const query = { value: value }
    categoryModel.findOne(query, callback)
}

// create category
module.exports.createCategory = (req, res) => {
    this.checkCategory(req.body.value, async (err, found) => {
        if (err) throw err;
        if (found) {
            res.status(400).json({ state: false, msg: 'category already exsist!' })
        }
        if (!found) {
            try {
                const newTitle = req.body.value.charAt(0).toUpperCase() + req.body.value.slice(1);
                const newCategory = new categoryModel({
                    title: newTitle,
                    value: req.body.value,
                })
                const savedUser = await categoryModel.create(newCategory)
                res.status(201).json({ state: true, msg: 'catrgory create successfully' })
            }
            catch (error) {
                const errors = handleErrors(error)
                res.status(400).json({ state: false, msg: errors })
            }
        }
    })

}

// get category
module.exports.getAllCategory = async (req, res) => {
    const data = await categoryModel.find({}).select("title value _cId -_id").sort('_cId')
    res.status(201).json({ state: true, category: data })
}

//delete category
module.exports.deleteCategory = async (req, res) => {
    const uId = req.params.id
    try {
        const query = { _cId: uId }
        await categoryModel.deleteOne(query)
        res.status(200).json({ state: true, msg: 'category remove successfully' })
    } catch {
        res.status(400).json({ state: false, msg: 'category remove unsuccessfully' })
    }
    /* await categoryModel.deleteOne(query).then(function () {
        console.log("Data deleted"); // Success
    }).catch(function (error) {
        res.status(400).json({ state: false, msg: 'catrgory remove unsuccessfully!' })
    }); */
}
