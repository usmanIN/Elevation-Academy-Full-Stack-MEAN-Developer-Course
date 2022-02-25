const express = require("express"); //importing libraries
const app = express(); // create server
const hostname = '127.0.0.1';
const port = 4000;

// we are haveing two folders in tehis application 
// reoutes:: is te one in which we will be defining whaty and all routes ourapplication will be supporting
// controller: is the one in which you will be wirting actuall login of sending the response in the route.
app.use("/student",require("./routes/student.js"));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});