const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("Hola esto es una prueba")
})
app.listen(3000, ()=>{
    console.log('se conecto');
})