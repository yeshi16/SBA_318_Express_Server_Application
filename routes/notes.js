const express = require('express')
const router = express.Router()

const notes = [{id: 1, posted: new Date().toLocaleTimeString(), title: 'What is Lorem Ipsum?', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}] //[{id: 1, title: 'first note', content: 'first content'}, {title: 'second note', content: 'second content'}]

// get all notes
router.get('/', (req, res) => { //  :title/:content
    // res.send('you can find all notes here')
    res.render('notes', {notes}) // {title: req.params.title, content: req.params.content}
})

// add new note
router.post('/', (req, res) => {
    // res.send('you can post new note here')
    const note = {id: notes.length + 1, posted: new Date().toLocaleTimeString(), title: req.body.title, content: req.body.content}
    notes.push(note)
    res.redirect('/notes')
})

// query parameter 
// params sort by date that is key value  pair
// http://localhost:3000/notes?sort=ascending
// router.get('/', (req, res) =>{
//     res.send(`${req.query.sort}`)
//   })

// update note
router.patch('/:id', (req, res) => {
    // res.send(`you can update ${req.params.id}'s note hrer`)
    const note = notes.find(n => n.id == req.params.id)
    note.title = req.body.title || note.title
    note.content = req.body.content || note.content
    res.redirect('/notes')
    // res.json(notes);
})

// delete a note
router.delete('/:id', (req, res) => {
    // res.send(`you deleted ${req.params.id}'s note`)
    const id = req.params.id
    
    for(let i = 0; i < notes.length; i ++){
        if(notes[i].id == id){
            notes.splice(i, 1)
        }
    }
    res.redirect('/notes')
    
})

module.exports = router


