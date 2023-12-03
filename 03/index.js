const { getInput } = require('../helper');
const lines = getInput(__dirname, 'input')
    .split('\n')

const maxWidth = lines[0].length;
const isValidX = x => x >= 0 && x < maxWidth
const maxHeight = lines.length;
const isValidY = y => y >= 0 && y < maxHeight
const notASymbol = ['.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

/** PART I */
const isPartNumber = (match, lineNumber, lines) => {
    for (let x = match.index - 1; x < match[0].length + match.index + 1; x++) {
        if (!isValidX(x)) continue
        for (let y = lineNumber - 1; y <= lineNumber + 1; y++) {
            if (isValidY(y) && !notASymbol.includes(lines[y].charAt(x))) {
                return true;
            }
        }
    }
    return false;
}

const partOne = lines => lines.reduce((acc, line, lineNumber) => {
    [...line.matchAll(/[0-9]+/g)]
        .forEach(match => {
            if (isPartNumber(match, lineNumber, lines)) {
                acc += parseInt(match[0])
            }
        })
    return acc
}, 0)

console.log('---------- PART I ----------');
console.log(partOne(lines));


/**  PART II */
const isPartOf = (match, x) => {
    const xMin = match.index - 1
    const xMax = (match.index + match[0].length)

    return xMin <= x && x <= xMax
}

const calculateGearRatio = (index, lineNumber, lines) => {
    const numbers = [lineNumber - 1, lineNumber, lineNumber + 1].reduce((acc, y) => {
        if (!isValidY(y)) return acc
        return [
            ...acc,
            ...[...lines[y].matchAll(/[0-9]+/g)]
                .filter(match => isPartOf(match, index))
                .map(match => parseInt(match[0]))
        ]
    }, [])

    if (numbers.length === 2) return numbers[0] * numbers[1]

    return -1;
}

const partTwo = lines => lines.reduce((acc, line, lineNumber) => {
    [...line.matchAll(/\*/g)].forEach(match => {
        const gearRatio = calculateGearRatio(match.index, lineNumber, lines)
        if (gearRatio >= 0) {
            acc += gearRatio
        }
    })
    return acc;
}, 0)

console.log('---------- PART II ----------');
console.log(partTwo(lines));
