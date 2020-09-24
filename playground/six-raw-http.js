const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=2bc90db215a4ee9bd2351b699bba3216&query=40,-75`;


const request = http.request(url, (response)=>{
    let data = '';

    response.on('data', chunk => {

        data = data + chunk.toString();
        data = JSON.parse(data);

       
    })


    response.on('end', () => {
        console.log(data);
    })
})

request.on('error', error => {
    console.log(error);
})

request.end();