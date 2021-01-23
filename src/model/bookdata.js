//Accessing Mongoose package
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb+srv://userone:userone@fsd.ufvmj.mongodb.net/FSD?retryWrites=true&w=majority');

//Schema definition
const schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//Model creation
var Bookdata = mongoose.model('bookdata', BookSchema);

module.exports = Bookdata;