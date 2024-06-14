const express = require('express')
const app = express()
const port = 3000;
const path = require('path')

const notesRouter = require('./routes/notes')
const error = require('./utility/error')
// middleware for parsing json
app.use(express.json())

// set template engine
app.set('view engine', 'pug'); // use pug view engine 
app.set('views', path.join(__dirname, 'views'))

// style static file
app.use(express.static('public'));

// notes route
app.use('/notes', notesRouter)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
})

app.get('/', (req, res) => {
    // res.send("Hello World")
    res.render('home')
})

// 404 Middleware
app.use((req, res, next) => {
    next(error(404, "Resource Not Found"));
  });
  
  // Error-handling middleware.
  // Any call to next() that includes an
  // Error() will skip regular middleware and
  // only be processed by error-handling middleware.
  // This changes our error handling throughout the application,
  // but allows us to change the processing of ALL errors
  // at once in a single location, which is important for
  // scalability and maintainability.
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });
