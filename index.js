'use strict'
const colors = require('colors');
const getNums = require('./get-nums');

function getPrompt() {
    console.log( colors.green.bold("Let's do math!") );
    setTimeout(getNums, 500);
}

getPrompt();

// // trying to do this an easier way but can't figure out how to check if input is valid. no luck assigning variables

// function getInput() {
//     rl.question('Ready for input! \n', (input) => {
//         console.log( `${input} = ${eval(input)}.` );
//         getInput();
//     })
// }

// getInput();

// // function assignVariable(input) {
// //     console.log('Variable saved!');
// //     input = JSON.stringify(input);
// //     return JSON.parse(input);
// // }