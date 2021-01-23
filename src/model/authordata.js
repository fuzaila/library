//Accessing Mongoose package
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb+srv://userone:userone@fsd.ufvmj.mongodb.net/FSD?retryWrites=true&w=majority');

//Schema definition
const schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    author: String,
    books: String,
    genre: String,
    image: String
});

//Model creation
var Authordata = mongoose.model('authordata', AuthorSchema);

module.exports = Authordata;