const express = require('express')
const https = require('https');
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static('public'));
const { getMessage } = require('./getMessage.js');
const { getVisitors } = require('./visitorHandle.js');
const { increaseVisitors } = require('./visitorHandle.js');

// by scanning my own website hosted on the school network
// I can see if the wifi is down too
const websiteUrl = 'https://server.bskdany.com/';
// const websiteUrl = 'https://www.lakeheadu.ca/';

let isWebsiteDown = false;
message = ""


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/checkIfWebsiteDown', (req, res) => {
    res.json({ isWebsiteDown, message});
});

function checkIfWebsiteDown(){
    https.get(websiteUrl, (response) => {
        if (response.statusCode === 200) {
            if(!isWebsiteDown){
                isWebsiteDown = false;
                getMessage(isWebsiteDown, (randomline) => {
                    message = randomline;
                });
                console.log(`${websiteUrl} is online.`);
            }
        } 
        else {
            if(!isWebsiteDown){
                isWebsiteDown = false;
                getMessage(isWebsiteDown, (randomline) => {
                    message = randomline;
                });
                console.log(`${websiteUrl} is not online (Status Code: ${response.statusCode}).`);
            }
        }
    }).on('error', (error) => {
        console.error(`Error checking ${websiteUrl}: ${error.message}`);
    });
}


console.log(getVisitors())

checkIfWebsiteDown()
setInterval(() => {
   checkIfWebsiteDown()
   getMessage(isWebsiteDown, (randomline) => {
    message = randomline;
});
}, 60000);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})