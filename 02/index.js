const { getInput } = require('../helper');
const games = getInput(__dirname, 'input').split('\n');

const maxRed = 12
const maxGreen = 13
const maxBlue = 14

/** PART I */
const partOne = games => games.reduce((acc, g, index) => {
    const [, sets] = g.split(':');
    const valid = sets.split(';')
        .every(
            set => set.split(',')
                .every(cube => {
                    const [nb, color] = cube.trim().split(' ')
                    let max = 0;
                    switch (color) {
                        case 'blue': max = maxBlue; break;
                        case 'red': max = maxRed; break;
                        case 'green': max = maxGreen; break;
                    }
                    return parseInt(nb) <= max
                })
        )
    return valid ? acc + index + 1 : acc;
}, 0)

console.log('---------- PART I ----------');
console.log(partOne(games));


/**  PART II */
const partTwo = games => games.reduce((acc, g, index) => {
    const [, sets] = g.split(':');
    const values = sets.split(';')
        .reduce(
            (maxs, set) => {
                set.split(',')
                    .forEach(cube => {
                        const [nb, color] = cube.trim().split(' ')
                        switch (color) {
                            case 'blue': maxs.blue = Math.max(maxs.blue, parseInt(nb)); break;
                            case 'red': maxs.red = Math.max(maxs.red, parseInt(nb)); break;
                            case 'green': maxs.green = Math.max(maxs.green, parseInt(nb)); break;
                        }
                    })
                return maxs;
            }, { blue: 0, green: 0, red: 0 }
        )
    return (values.blue * values.green * values.red) + acc;
}, 0)

console.log('---------- PART II ----------');
console.log(partTwo(games));
