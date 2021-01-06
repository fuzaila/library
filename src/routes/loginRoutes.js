const express = require('express');
const loginRouter = express.Router(); 

function router(nav){

    loginRouter.get('/', function(req, res)
    {
        res.render("login",
        {
            nav, title: 'Login' 
        });

        // var id = document.getElementById();
        // var pass = document.getElementById();
        // for(i = 0; i < acc.length; i++)
        // {
        //     if(acc[i].email == id.value )
        // }
    });

    return loginRouter;

}

module.exports = router;