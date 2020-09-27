const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();


// define paths for express config
const publicDirectoryPath = express.static(path.join(__dirname, '../public'));
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//  setup handlebars and views location in templates folder
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


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
        msg: "Welcome to the help page.",
        name: "Reid"
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