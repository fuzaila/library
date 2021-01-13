const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const nav = [
    {link: "/dashboard", name: "My Library"},
    {link:"/books", name:"Books"}, 
    {link: "/authors", name:"Authors"},
    {link: "/books/addbook", name:"Add Book"},
    {link: "/", name: "Log out"}
];

var books = [
    {title: "Tom & Jerry", author: "Joseph Barbara", genre: "Cartoon", img: "tomnj.jpg"},
    {title: "Harry Potter", author: "JK Rowling", genre: "Fantasy", img: "hp.jpg"},
    {title: "Tom Sawyer", author: "Mark Twain", genre: "Adventure", img: "tomsawyer.jpg"}
];

const booksRouter = require('./src/routes/bookRoutes')(nav, books);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const acRouter = require('./src/routes/acRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./src/views');

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/dashboard', acRouter);

app.get('/', function(req, res){
    res.render("index", 
    {
        nav, title: 'Your Own Library'  
    });

});


app.listen(port, ()=>{console.log("Server ready at " + port)});

module.exports = books;