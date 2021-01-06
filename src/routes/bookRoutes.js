const express = require('express');
const booksRouter = express.Router(); 
// var r = require('C:\\Users\\user\\Desktop\\practice\\library app 2\\public\\js\\validate_addbook.js');
// var $;
// $ = require('jquery');
// $('.tag').click(function(){
//     return console.log('clicked');
// });


function router(nav, books){

    booksRouter.get('/', function(req,res){
        res.render("books",
        {
            nav, title: 'Books', books  
        });
    });
    
    booksRouter.get('/addbook', function(req,res){
        res.render("addbook",
        {
            nav, title: 'Books', books  
        });
    });

    booksRouter.get('/:id', function(req, res){
        const id = req.params.id; 
        res.render("book",
        {
            nav, title: 'Books', book: books[id]
        });
    });   
    
    return booksRouter;

}

module.exports = router;
