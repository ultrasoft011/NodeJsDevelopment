const { default: chalk } = require('chalk')
const fs = require('fs')

// const getNotes = () =>  'Your notes...' 
//
// Fcuntion to add a note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Duplicate note detected')
    }
}

// Function to removeNote
const removeNote = (title) => {
    const notes = loadNotes()
    const noteKeeper = notes.filter((note) => note.title !== title)

    if (notes.length > noteKeeper) {
        console.log(chalk.bgGreen.bold('A note was removed'))
        saveNotes(noteKeeper)
    }
    else {
        console.log(chalk.bgRed.bold('No note found'))
    }
}

// Function to save a note
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Function to load a note
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

// Export the modules to script.js
module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}