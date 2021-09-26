const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        min: 3,
        max: 255,
        required: true
    },

    slug: {
        type: String,
        unique: true,
        trim: true,
        index: true,
        lowercase: true,
        required: true
    },
    content: {
        type: {},
        required: true,
        minimum: 20,
        max: 200000,
    },
    user: {
        type: String,
        default: 'admin'
    }
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema)