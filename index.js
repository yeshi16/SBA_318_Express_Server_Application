const express = require('express')
const app = express()
const port = 3000;
const path = require('path')

const notesRouter = require('./routes/notes')

// middleware for parsing json
app.use(express.json())

// set template engine
app.set('view engine', 'pug'); // use pug view engine 
app.set('views', path.join(__dirname, 'views'))

// notes route
app.use('/notes', notesRouter)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
})

app.get('/', (req, res) => {
    // res.send("Hello World")
    res.render('home')
})

app.js
