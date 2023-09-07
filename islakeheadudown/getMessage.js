const fs = require('fs');
const { get } = require('http');

// Function to read a file and return its lines as an array
function readFileLines(isItDown) {
    filePath = "messages/"
    if(isItDown){
        filePath+= "downtime.txt"
    }
    else{
        filePath+= "uptime.txt"
    }
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.split('\n');
        return lines;
    } 
    catch (error) {
        console.error('Error reading the file:', error);
        return null; // or throw the error, depending on your error handling strategy
    }
}

// Function to select a random line from an array of lines
function getRandomLine(lines) {
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
}

// Function to get a random line from a file
function getMessage(isItDown) {
    message = getRandomLine(readFileLines(isItDown));
    return message
}

module.exports = {
    getMessage,
};