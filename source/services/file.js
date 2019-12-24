const fs = require('fs');

function readFile(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    catch (err) {
        console.error(err);
    }
    return [];
}

module.exports = {
    readFile
}