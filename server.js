const express = require('express')

const app = express()


const notes = []

// notes => title & description 
app.use(express.json())
app.post('/notes', (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message: "Note added successfully",
    })
})
// to get data from server use get and 
app.get('/notes', (req, res) => {
    res.json(notes)
})

// to delete notes use delete method and /notes/:indexvalue 

app.delete('/notes/:index', (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.json({
        message: "note deleted successfully"
    })
})


app.listen(3000, () => {
    console.log('server is running on port 3000')
})