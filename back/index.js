const express =require("express")

const app =express()

app.get("/",function(req,res)
{
    res.send("your ended the sever..")
})
app.get("/name",function(req,res)
{
    console.log("Port Running 5000...")
    console.log([req.query.username])
    res.send("Port Running 5000...")
    
})

app.listen(5000,function()
{
    console.log("server started...")
})