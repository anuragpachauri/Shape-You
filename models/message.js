const mongoose = require('mongoose');
const message = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    Date_of_Post : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('message', message);