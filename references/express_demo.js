const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/alien',(req,res)=>{
    const id = req.query.id; 
    
    res.send('Welcome back alienssss'+ id) 
     

})

app.get('/alien/:id',(req,res)=>{
    const id = req.params.id
    res.send("hey nikhil" + id)
})
app.listen(9000,(req,res)=>console.log('running'));