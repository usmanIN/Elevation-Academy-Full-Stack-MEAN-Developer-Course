const express = require("express");
const cors = require("cors");
const app = express(); // create server
const host = "127.0.0.1";
const port = 4000;

app.use(cors()); // to allow application to run and support api request in react file 10-feb-2022
// cors stands for cross-origin resources sharing, it allows you to connect two application
//running on different ports to comminucate with each others in order to send or recevie the data.
app.use("/api",require("./Routes"));

app.listen(port,host,() =>{
    console.log(`Server running at http://${host}:${port}/`);
});
