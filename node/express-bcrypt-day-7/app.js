const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { request, response } = require("express");


const app = express();
const host = "127.0.0.1"
const port = 4000;
const SECERTY_KEY = "$2b$10$YEz92//yxBuNhLOdGafFYuN0JzGqKsegV1rstFC0QOjxmziVGXUO";

const verifyToken = (req, res, next) => {
    const value = req.header("authorization") || req.header("Authorization");
    const token = value.split(" ")[1];
    try {
        jwt.verify( token, SECRET_KEY ); // if this function is failing then we will send the response to the frontend from catch block.
        next();
    } catch (error) {
        res.status(401).json({
            success : false,
            message : "Verification of token is not succeded, user is not authorized"
        })
    }
}

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
    
    const user ={
        name: request.query.username,
        passwd: request.query.password
    };

    response.send({
        jwtToken: jwt.sign(user,SECERTY_KEY,{expiresIn:"5000"})
    });
});


// I am verifying the user by token , if token is not expired then api call will be made else not
app.get("/user", verifyToken , (req, res)=>{
    res.json({
        name:"John"
    })
})


app.listen(port,host,()=>{
    console.log("Application Started");
});


// https://github.com/sharma-harshita/login-auth
// https://github.com/sharma-harshita/hooks16.8