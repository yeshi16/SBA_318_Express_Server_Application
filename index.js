const express = require('express')
const app = express()
const port = 3000;
const path = require('path')

// middleware for parsing json
app.use(express.json())

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
})

app.get('/', (req, res) => {
    res.send("Hello World")
})