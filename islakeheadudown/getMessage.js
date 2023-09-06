const fs = require('fs');

// Function to read a file and return its lines as an array
function readFileLines(isItDown, callback) {
    filePath = "messages/"
    if(isItDown){
        filePath+= "downtime.txt"
    }
    else{
        filePath+= "uptime.txt"
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        const lines = data.split('\n');
        callback(lines);
    });
}

// Function to select a random line from an array of lines
function getRandomLine(lines) {
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
}

// Function to get a random line from a file
function getMessage(isItDown, callback) {
    readFileLines(isItDown, (lines) => {
        const randomLine = getRandomLine(lines);
        callback(randomLine);
    });
}

module.exports = {
    getMessage,
};
