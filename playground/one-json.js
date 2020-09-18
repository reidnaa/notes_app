const fs = require('fs');


const dataBuffer = fs.readFileSync('one-json.json');

const dataJSON = dataBuffer.toString();


const user = JSON.parse(dataJSON);

user.name = "Reid";
user.age = 35;


const userJSON = JSON.stringify(user)
fs.writeFileSync('one-json.json', userJSON);