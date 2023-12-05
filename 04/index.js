const { getInput } = require('../helper');

const extractNumbers =
    stringNumbers => [...stringNumbers.matchAll(/[0-9]+/g)].map(m => m[0])

const cards = getInput(__dirname, 'input')
    .split('\n')
    .map(line => {
        let [, newLine] = line.split(':')
        const [winningNumbers, givenNumbers] = newLine.split(' | ').map(extractNumbers)
        return { winningNumbers, givenNumbers }
    })

/** PART I */
const calculateCardPoint = card => card.winningNumbers.reduce((points, number) => {
    if (!card.givenNumbers.includes(number)) {
        return points
    }
    if (points === 0) return 1
    return points << 1
}, 0)
const partOne = cards => cards.reduce(
    (totalPoints, card) => totalPoints + calculateCardPoint(card),
    0
)

console.log('---------- PART I ----------');
console.log(partOne(cards));

/**  PART II */
const partTwo = cards => null

console.log('---------- PART II ----------');
console.log(partTwo(cards));
