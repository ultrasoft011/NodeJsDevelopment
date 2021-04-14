// Challenge: Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes functions that returns "Your notes.."
// 3. Exports getNotes function
// 4. From app.js, load in and call the function printing message to console
//

const message = require('./notes.js')

console.log(message());

// const add = require('./utils.js')
//
// const sum = add(4, 2);
//
// console.log(sum)