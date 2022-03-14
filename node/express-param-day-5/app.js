const { response } = require("express");
const express = require("express");
const app = express();
const host = "127.0.0.1"
const port = 4000;

app.get("/api/content",(request,response) => {
    let result =  "";
    const data = require("./database/posts");
    
    if(data.length > 0){        
        result = data;
        if(request.query.id){
            result =  data.filter(element => element.id == request.query.id);
            result = (result.length >0)?result:"Not Found";
        }
    }

    response.send(result);
});


//There are two different ways how you can receive the data from the frontend
//URL Paramns: localhost:4000/api/students : we can only pass individual values
//Query Params:localhost:4000/api/students/?name="sunil" : we passing values in key values format


app.listen(port,host,()=>{
    console.log("Application Started");
});



