const express = require("express");
const router = express.Router();

const data = [
    { name: "Usman",  age: 26 },
    { name: "Gani", age: 25 },
];

router.get("/",function(request,response){
    response.send(data);    
});

module.exports = router;
