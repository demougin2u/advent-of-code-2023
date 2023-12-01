const { getInput } = require('../helper');
const lines = getInput(__dirname, 'input').split('\n');

/** PART I */
const partOne = input =>
    input.reduce(
        (acc, line) => {
            const sanitizedLine = line.split('').map(char => parseInt(char)).filter(n => !isNaN(n))
            return acc + (sanitizedLine[0] * 10 + sanitizedLine[sanitizedLine.length - 1]);
        }, 0
    );

console.log('---------- PART I ----------');
console.log(partOne(lines));



/**  PART II */
const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

const findOccurences = (spelled, number, line) => {
    const res = [spelled, number].reduce((acc, searched) => {
        let index = -1;
        do {
            index = line.indexOf(searched, index + 1)
            if (index >= 0) acc[index] = number;
        } while (index >= 0)
        return acc;
    }, {})
    return Object.keys(res).length > 0 ? res : null
}


const partTwo = input => input.reduce(
    (acc, line, i) => {
        const numbersFound = Object.assign(...numbers.map((n, i) => findOccurences(n, i + 1, line)).filter(x => x))
        const first = numbersFound[Math.min(...Object.keys(numbersFound))];
        const last = numbersFound[Math.max(...Object.keys(numbersFound))];
        return first * 10 + last + acc
    }, 0
);


console.log('---------- PART II ----------');
const lines2 = getInput(__dirname, 'input-2').split('\n');
console.log(partTwo(lines2));
