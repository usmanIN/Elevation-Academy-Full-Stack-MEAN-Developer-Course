const express = require("express");
const path = require("path");
const router = express.Router()

router.get("/",(request,response)=>{
    response.sendFile(path.join(__dirname,"../public",'index.html'));
})

router.get("/demo",(request,response)=>{
    response.sendFile(path.join(__dirname,"../public",'demo.html'));
});


router.get("/login",(request,response)=>{
    response.sendFile(path.join(__dirname,"../public",'login.html'));
});

router.get("/signup",(request,response)=>{
    response.sendFile(path.join(__dirname,"../public",'signup.html'));
});


router.get("/test",(request,response)=>{
    response.render('guardian', { 
        title: 'Hey', 
        message: 'Hello there!' 
    });
})

module.exports = router;