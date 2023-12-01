const fs = require('fs');
const path = require('path');

module.exports = {
    getInput: (dirname, name) => {
        if (!name) name = 'input'
        return fs.readFileSync(path.join(dirname, `${name}.txt`), 'utf-8');
    }
}