const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static('public'));


let isWebsiteDown = true;

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/checkIfWebsiteDown', (req, res) => {
    res.json({ isWebsiteDown });
  });

setInterval(() => {
    isWebsiteDown = !isWebsiteDown;
    console.log("The webside is now: " + isWebsiteDown.toString())
}, 1000);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})