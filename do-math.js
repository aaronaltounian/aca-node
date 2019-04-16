function doMath(x, y, operand) {
    switch (operand) {
        case 'add':
            return `${x} plus ${y} equals ${parseInt(x) + parseInt(y)}`;
        case 'subtract':
            return `${x} minus ${y} equals ${parseInt(x) - parseInt(y)}`;
        case 'multiply':
            return `${x} multiplied by ${y} equals ${parseInt(x) * parseInt(y)}`;
        case 'divide':
            return `${x} divided by ${y} equals ${parseInt(x) / parseInt(y)}`;
        default:
            return colors.red('Try again, using add, subtract, multiply, or divide!');
    }
}

module.exports = doMath;