const express = require("express");

module.exports.studentGet = (request,response) =>{

    response.send([
        {   name:"Zoom",    age:23  },
        {   name:"Lenovo",  age:32  },
        {   name: "Usman",  age: 26 },
        {   name: "Gani",   age: 25 }
    ]);
};
 