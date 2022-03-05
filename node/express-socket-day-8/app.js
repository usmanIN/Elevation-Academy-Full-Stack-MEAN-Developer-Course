
const express = require("express")
const socket = require("socket.io");

const app = express();

const server = app.listen(8000, () => {
    console.log("Application has started");
})

const io = socket(server, {
    cors:{
        origin: "*"
    }
});


io.on("connection",(socketClient)=>{
    console.log("User has got connected")
});