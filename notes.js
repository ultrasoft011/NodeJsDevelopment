const { default: chalk } = require('chalk')
const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

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

const removeNote = function (title) {
    const notes = loadNotes()
    const noteKeeper = notes.filter(function (note) {
            return note.title !== title
        })
    if (notes.length > noteKeeper) {
        console.log(chalk.bgGreen.bold('A note was removed'))
        saveNotes(noteKeeper)
    }
    else {
        console.log(chalk.bgRed.bold('No note found'))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}