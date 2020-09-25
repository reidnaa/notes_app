const path = require('path');
const express = require('express');


const app = express();


const publicDirectoryPath = express.static(path.join(__dirname, '../public'));

app.use(publicDirectoryPath);



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