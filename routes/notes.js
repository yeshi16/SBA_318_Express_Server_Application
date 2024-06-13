const express = require('express')
const router = express.Router()

const notes = [] //[{id: 1, title: 'first note', content: 'first content'}, {title: 'second note', content: 'second content'}]

// get all notes
router.get('/', (req, res) => { //  :title/:content
    // res.send('you can find all notes here')
    res.render('notes', {notes}) // {title: req.params.title, content: req.params.content}
})

// add new note
router.post('/', (req, res) => {
    // res.send('you can post new note here')
    const note = {id: notes.length + 1, title: req.body.title, content: req.body.content}
    notes.push(note)
    res.redirect('/notes')
})

// update note
router.patch('/:id', (req, res) => {
    // res.send(`you can update ${req.params.id}'s note hrer`)
    const note = notes.find(n => n.id == req.params.id)
    note.title = req.body.title || note.title
    note.content = req.body.content || note.content
    // res.redirect('/notes')
    res.json(notes);
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


