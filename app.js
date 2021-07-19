const express = require('express')
const app = express()

const PORT = 3000

app.get('/hello', function (req, res) {
    const name = req.query.name
    res.send({message: `Hello, ${name}!`})
})

app.listen(PORT,()=>{
    console.log(`Server has been started at ${PORT}`)
})