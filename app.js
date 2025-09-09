import express from "express"

const app = express()



app.get("/health",(req,res)=> {
    res.send({
        "msg":"Sever is working fine"
    })
})

app.listen(4000,()=>{
    console.log("Sever is listening to port 40000");
    
})