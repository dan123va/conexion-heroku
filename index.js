const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("Hola esto es una prueba")
})
app.set('port', process.env.PORT || 3000)

app.listen('port', ()=>{
    console.log('se conecto');
})