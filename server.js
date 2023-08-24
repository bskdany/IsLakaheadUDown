const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug');
app.use(express.static('public'));
// app.set('views', path.join(__dirname, 'views'));

let isWebsiteDown = true;

app.get('/', (req, res) => {
    res.render('index', {isWebsiteDown});
})

app.get('/getVariableValue', (req, res) => {
    res.json({ isWebsiteDown });
  });

setInterval(() => {
    isWebsiteDown = !isWebsiteDown;
    console.log("The webside is now: " + isWebsiteDown.toString())
}, 10000);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})