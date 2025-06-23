const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send("AI_TEXT SUMMARIZER")
})

app.listen(3000,()=>{
    console.log("Hello...")
})