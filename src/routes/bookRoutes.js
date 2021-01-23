const express = require('express');
const booksRouter = express.Router(); 
const Bookdata = require('../model/bookdata');
  
function router(nav){

    booksRouter.get('/', function(req,res){
        var user = req.query.user;
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav, title: 'Books', books, user  
            });
        });
        
    });


    booksRouter.get('/:id', function(req, res){
        const id = req.params.id; 
        var user = req.query.user;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render("book",
            {
                nav, title: 'Books', book, user
            });
        })
        
    });   
    
    return booksRouter;

}

module.exports = router;
