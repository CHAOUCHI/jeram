const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>");
})

app.use((req,res)=>{
    res.status(404).send("Error 404");
});

app.listen(2000,()=>{
    console.log("Server start on port 2000");
});