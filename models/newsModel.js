const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const newsSchema = new Schema({
    _nId: {
        type: Number
    },
    author: {
        type: Number,
        required: [true, "author id must be required"],
    },
    category: {
        type: String,
        required: [true, "news category must be required"],
        enum: ['sports', 'tech'],
        default: 'sports',
    },
    heading: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: false,
    },
    subContent: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
        // 2022-09-09T04:03:30.011+00:00
    },
    updatedAt: {
        type: Date,
        default: Date.now
        // 2022-09-09T04:03:30.011+00:00
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    imgUri:{
        type: String,
        required: false,
    }
    
})

newsSchema.plugin(AutoIncrement, { inc_field: '_nId' });
const News = mongoose.model('news', newsSchema) // save user in db
module.exports = News