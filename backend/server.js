const express= require("express");
const app=express();
const cors=require("cors");
const port =2000;
app.use(cors());


app.get("/",(req,res)=>{
	res.send("working")
})


app.listen(port,()=>{console.log(`app is running on port ${port}`)})

