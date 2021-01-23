const express = require('express');
const loginRouter = express.Router();
const Userdata = require('../model/userdata');
const alert = require('alert'); 

function router(nav){

    loginRouter.get('/', function(req, res)
    {
        res.render("login",
        {
            nav, title: 'Login' 
        });

    });

    loginRouter.post('/check', function(req, res)
    {
        var item = {
            email: req.body.email,
            password: req.body.password
        }

        Userdata.findOne({email: req.body.email, password: req.body.password})
            .then(user=>{
                if(user){
                    var name = encodeURIComponent(user.name);
                    res.redirect('/dashboard/?user='+name);
                }
                else{
                    alert("Email and Password donot match.");
                }
            })
        
        
    });

    // loginRouter.get('/', function(req, res)
    // {
    //     res.render("dashboard",
    //     {
    //         nav, title: 'My Library' 
    //     });
    // });

    return loginRouter;

}

module.exports = router;