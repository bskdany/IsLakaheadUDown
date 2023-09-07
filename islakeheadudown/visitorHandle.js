const fs = require('fs');

// Function to read a file and return its lines as an array
function getVisitors() {
    filePath = "data/visitors.txt"
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data;
    } 
    catch (error) {
        console.error('Error reading the file:', error);
        return null; // or throw the error, depending on your error handling strategy
    }
}

// Function to read a file and return its lines as an array
function increaseVisitors() {
    filePath = "data/visitors.txt"
    const data = fs.readFileSync(filePath, 'utf8');
    visitors_count = Number(data);
    visitors_count+=1;
    fs.writeFileSync(filePath, String(visitors_count));
}

module.exports = {
    getVisitors,
    increaseVisitors
};