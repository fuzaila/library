const express = require('express');
const authorsRouter = express.Router(); 
const Authordata = require('../model/authordata');

function router(nav){

    Authordata.find()
    .then(function(authors){
        authorsRouter.get('/', function(req,res){
            var user = req.query.user;
            res.render("authors",
            {
                nav, title: 'Authors', authors, user  
            });
        });
    })
    
    
    authorsRouter.get('/:id', function(req, res){
        const id = req.params.id; 
        var user = req.query.user;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render("author",
            {
                nav, title: 'Author', author, user
            });
        })
    });    
    
    return authorsRouter;

}

module.exports = router;