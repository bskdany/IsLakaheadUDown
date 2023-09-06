const fs = require('fs');
filePath = "data/visitors.txt"

// Function to read a file and return its lines as an array
function getVisitors() {
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
    const data = fs.readFileSync(filePath, 'utf8');
    visitors_count = Number(data);
    visitors_count+=1;
    fs.writeFileSync(filePath, String(visitors_count));
}

module.exports = {
    getVisitors,
    increaseVisitors
};

increaseVisitors()
console.log(getVisitors())