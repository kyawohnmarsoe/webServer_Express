const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
const url = `http://api.weatherstack.com/current?access_key=2156267369cb02a7133593e0fd8e9004&query=${latitude},${longitude}`


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. This high today is ' + body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast