const express = require('express')
const https = require('https');
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static('public'));

// const websiteUrl = 'https://server.bskdany.com/';
const websiteUrl = 'https://www.lakeheadu.ca/';


let isWebsiteDown = false;

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/checkIfWebsiteDown', (req, res) => {
    res.json({ isWebsiteDown });
  });

function checkIfWebsiteDown(){
    https.get(websiteUrl, (response) => {
        if (response.statusCode === 200) {
            isWebsiteDown = false;
            console.log(`${websiteUrl} is online.`);
        } 
        else {
            isWebsiteDown = true;
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