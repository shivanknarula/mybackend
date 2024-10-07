require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {res.send('Hello World!')})

app.get('/twitter',(req,res)=>{res.send('shivankdotcom')})

app.get('/login',(req,res) => {res.send('<h1> Please login first</h1>')})

app.get('/youtube',(req,res) => {res.send('<h2>HELLO AND CODE</h2>')})

app.listen(process.env.port, () => {console.log(`Example app listening on port ${port}`)})
