const express = require('express')
const router = express.Router()

// get all notes
router.get('/', (req, res) => {
    res.send('you can find all notes here')
})

// add new note
router.post('/', (req, res) => {
    res.send('you can post new note here')
})

// update note
router.patch('/:id', (req, res) => {
    res.send(`you can update ${req.params.id}'s note hrer`)
})

// delete a note
router.delete('/:id', (req, res) => {
    res.send(`you deleted ${req.params.id}'s note`)
})

module.exports = router