const mongoose = require('mongoose');

const user = new mongoose.Schema({
    first_name:{
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    // mesurment
    belly : {
        type : Number,
        required : true
    },
    arm : {
        type : Number,
        required : true
    },
    neck : {
        type : Number,
        required : true
    },
    thigh :{
        type : Number,
        required : true
    },
    height : {
        type : Number,
        required : true
    },
    weight : {
        type : Number,
        required : true
    },
    // goals
    g_weight : {
        type : Number,
        required : true
    },
    goal :{
        type : String,
        required : true
    },
    Date_of_creation : {
        type : Date,
        default : Date.now().toString()
    }
})

module.exports = mongoose.model('Users', user);