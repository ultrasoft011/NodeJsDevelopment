// Challenge: Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes functions that returns "Your notes.."
// 3. Exports getNotes function
// 4. From app.js, load in and call the function printing message to console
//
// Challange: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Sucess!" to the console in green
// 4. Test your work

const chalk = require('chalk')
const yargs = require('yargs')
const { removeNote } = require('./notes.js')
const notes = require('./notes.js')

// const command = process.argv[2]

// console.log(process.argv)

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'The body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'A note to remove',
            demandOption: true,
            type: 'string'
        }
    }   ,
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {
        console.log('Listing a note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler() {
        console.log('Reading a note')
    }
})

// Create add, remove, read and list commands
//
yargs.parse() 
//
// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!');
// }

// console.log(chalk.red.bold('Yaz, I am learning Node.JS npm'));

// console.log(process.argv[2])

// // const add = require('./utils.js')
// //
// const sum = add(4, 2);
//
// console.log(sum)