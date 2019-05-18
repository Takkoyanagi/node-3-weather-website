const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url =  'https://api.darksky.net/forecast/1ef7925db485fd932ea738aada4dc0f3/' + latitude + ',' + longitude

//     request({ url:url, json: true}, (error, response) => {
//         if (error) {
//             callback('unable to connect to weather services', undefined)
//         } else if (response.body.error) {
//             callback('unable to find location', undefined)
//         } else {
//             callback(undefined, response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain")
//         }
//     })
// }

const forecast = (latitude, longitude, callback) => {
    const url =  'https://api.darksky.net/forecast/1ef7925db485fd932ea738aada4dc0f3/' + latitude + ',' + longitude

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance of rain")
        }
    })
}


module.exports = forecast