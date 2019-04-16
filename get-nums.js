const colors = require('colors');
const doMath = require('./do-math');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function getNums() {
    rl.question(colors.green('Enter the first number. \n'), (x) => {
        rl.question(colors.green('Enter the second number. \n'), (y) => {
            if( isNaN(x) || isNaN(y) ) {
                console.log( colors.red('Try again with two numbers!') );
                getNums();
            }
            else {
                rl.question(colors.green('Add, subtract, multiply, or divide? \n'), (operand) => {
                    operand = operand.toLowerCase();
                    console.log( colors.magenta.bold( doMath(x, y, operand) ) );
                    setTimeout(getNums, 750);
                })
            }
        })
    })
}

module.exports = getNums;