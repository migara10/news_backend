const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const newCategory = new Schema({
    _cId: {
        type: Number
    },
    title: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    
})

newCategory.plugin(AutoIncrement, { inc_field: '_cId' });
const News = mongoose.model('category', newCategory) // save user in db
module.exports = News