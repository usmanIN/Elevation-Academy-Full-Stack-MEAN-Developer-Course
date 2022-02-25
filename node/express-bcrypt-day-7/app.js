const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { request, response } = require("express");
const app = express();
const host = "127.0.0.1"
const port = 4000;



app.post("/signup",(request, response)=>{

    console.log(request.query);

    // bcrypt.genSalt(10,(err,salt)=>{        
    //     console.log((err)?err:salt);
    // });

    // bcrypt.hash(request.query.password, 10, (err,hash)=>{
    //     console.log((err)?err:hash);
    // });

    response.status(200).send({        
        message:"Successful",
    });

});

app.post("/login",(request,response)=>{
    const SECERTY_KEY = "$2b$10$YEz92//yxBuNhLOdGafFYuN0JzGqKsegV1rstFC0QOjxmziVGXUO";
    const user ={
        name: request.query.username,
        passwd: request.query.password
    };

    response.send({
        jwtToken: jwt.sign(user,SECERTY_KEY)
    });
});


app.listen(port,host,()=>{
    console.log("Application Started");
});



