const express = require("express");
const router = express.Router();

router.get("/",function(request, response){
    response.send([
        {name:"Zoom",age:23},
        {name:"Lenovo",age:32}
    ]);
});

module.exports.course = router;