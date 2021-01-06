const express = require('express');
const authorsRouter = express.Router(); 

function router(nav){

    var authors = [
        {author: "David Fischer", books: "Tom & Jerry", genre: "Cartoon", img: "tom.jpg"},
        {author: "J.K Rowling", books: "Harry Potter", genre: "Fantasy", img: "jkr.jpg"},
        {author: "Mark Twain", books: "Tom Sawyer, Huckleberry Finn", genre: "Adventure", img: "mark.jpg"}
    ];
    
    authorsRouter.get('/', function(req,res){
        res.render("authors",
        {
            nav, title: 'Authors', authors  
        });
    });
    
    authorsRouter.get('/:id', function(req, res){
        const id = req.params.id; 
        res.render("author",
        {
            nav, title: 'Author', authors: authors[id]
        });
    });    
    
    return authorsRouter;

}

module.exports = router;