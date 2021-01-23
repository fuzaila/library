const express = require('express');
const acRouter = express.Router(); 

function router(nav){

    acRouter.get('/', function(req, res)
    {
        var user = req.query.user;
        res.render("dashboard",
        {
            nav, title: 'My Library', user 
        });
    });

    return acRouter;

}

module.exports = router;