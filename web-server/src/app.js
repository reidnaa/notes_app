const path = require('path');
const express = require('express');


const app = express();


const publicDirectoryPath = express.static(path.join(__dirname, '../public'));

app.set('view engine', 'hbs');

app.use(publicDirectoryPath);

app.get('', (req, res)=> {
    res.render('index', {
        title : "WEATHER TIME",
        name: "Reid"
    })
})
app.get('/about', (req, res)=> {
    res.render('about', {
        title : "About ME",
        name: "Reid",
        imgSrc: '/img/image.png'
    })
})
app.get('/help', (req, res)=> {
    res.render('help', {
        title : "The Help Page",
        msg: "Welcome to the help page."
    })
})

app.get('/weather', (req, res) => {
    res.send({
        'name': 'reid',
        'age': '35',
        'worth': 'nothing'
    })
});

app.listen(3000, () => {
    console.log("server started on port 3000");
})