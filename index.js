const express=require('express')
const app=express()
app.use(express.json())
const port=4400;


app.get('/getuser',(req,res)=>{
return res.send("hello users")
})
app.get('/getmessage',(req,res)=>{
    res.send("second api test")
})
app.get('/second',(req,res)=>{
    res.send("second message")
})

app.listen(port,()=>{
    console.log(`server is runing on ${port}...`)
})