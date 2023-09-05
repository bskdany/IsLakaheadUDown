const express = require('express')
const https = require('https');
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static('public'));
// const sqlite3 = require("sqlite3").verbose();

// by scanning my own website hosted on the school network
// I can see if the wifi is down too
const websiteUrl = 'https://server.bskdany.com/';
// const websiteUrl = 'https://www.lakeheadu.ca/';

// const db = new sqlite3.Database("messages.db");

let isWebsiteDown = false;

app.get('/', (req, res) => {
    res.render('index');
})

onlineMessage = "Looks like it's all good for now"
offlineMessage = "The wifi is down, panic"
message = ""

app.get('/checkIfWebsiteDown', (req, res) => {
    res.json({ isWebsiteDown, message});
});

function checkIfWebsiteDown(){
    https.get(websiteUrl, (response) => {
        if (response.statusCode === 200) {
            isWebsiteDown = false;
            message = onlineMessage;
            console.log(`${websiteUrl} is online.`);
        } 
        else {
            isWebsiteDown = true;
            message = offlineMessage;
            console.log(`${websiteUrl} is not online (Status Code: ${response.statusCode}).`);
        }
    }).on('error', (error) => {
        console.error(`Error checking ${websiteUrl}: ${error.message}`);
    });
}

checkIfWebsiteDown()
setInterval(() => {
   checkIfWebsiteDown()
}, 60000);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})