const express = require('express')
const router = require('./employee')
const app = express()
const emp = require("./employee")
// app.listen(5500,()=>{
//     console.log("App is listening to port 5500")
// })

console.log("-------Test------------");
app.get('/', (req,res)=>{
    res.send("<body bgcolor='ky blue'> <h1 style='color'red;'>WelcomeFrom Home Page in Extension")
})

app.get('/home', (req,res)=>{
    res.send("<body bgcolor='sky green'> <h1 style='color'red;'>Welcome Home Page in allowwwwwwwwwwww")
})

app.use('/employee', emp)

app.listen(5500, ()=>{
    console.log("App is really listening at port 5500!!!")
})