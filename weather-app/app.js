const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

location ? geocode(location, (error, {long, lat} = {}) => {
    error ? console.log(error, 'error'): forecast(long,lat, (error, data) => {
        error ? console.log('Error -forecast', error):console.log(data);      
      });
}) : console.log( 'you need to name a place');

