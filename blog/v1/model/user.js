const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    email: {
        trim: true,
        type: String,
    },
    password: {
        type: String,
    },
    userStatus: {
        type: String,
        enum: ['active', 'inactive'],
        default : 'inactive'
    },
}, { timestamps: true })


module.exports = mongoose.model('user', userSchema);