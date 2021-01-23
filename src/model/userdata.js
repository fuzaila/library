//Accessing Mongoose package
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb+srv://userone:userone@fsd.ufvmj.mongodb.net/FSD?retryWrites=true&w=majority');

//Schema definition
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    email: {type: String, unique: true},
    phone: String,
    country: String,
    password: String
});

//Model creation
var Userdata = mongoose.model('userdata', userSchema);

module.exports = Userdata;