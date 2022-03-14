const express = require('express');
const app = express();
const port = process.env.port || 8000;
const path = require("path");
const cors = require("cors");

app.use(cors());
app.set("views",path.resolve(__dirname,'./views'))
app.set('view engine','pug')

app.use("/", require("./routes/web.routes"));
app.use("/api", require("./routes/api.routes"));
app.use("/images",express.static("public/images"));

app.get("*",(request,response) => {
    response.sendFile(path.join(__dirname,'/public','404.html'));
})

app.listen(port, () => {    
    console.log(`Application has started running successfully at port ${port}`);    
})