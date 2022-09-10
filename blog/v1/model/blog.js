const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    decription: {
        trim: true,
        type: String,
    },
    imageUrl: {
        type: String,
    },
    blogStatus: {
        type: String,
        enum: ['active', 'inactive'],
        default : 'active'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
}, { timestamps: true })


module.exports = mongoose.model('blog', blogSchema);