/*
We need to support 3 routes for user authentication
Allow user to sign up.
Allow user to sign in.
Allow user to update their information (firstName, lastName, password).
*/

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLenght: 3,
        maxLenght: 10
    },
    password:{
        type: String,
        required: true,
        minLenght:6
    },
    firstName:{
    type: String,
    required: true,
    trim: true,
    maxLenght: 50
    },
    lastName:{
        type: String,
        required: true,
        trim : true,
        maxLenght:20
    }
})

//Create a model from the Schema
const User = mongoose.model('User',userSchema);

module.exports = {
    User
};