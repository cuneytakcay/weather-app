const request = require('postman-request')
require('dotenv').config()

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}.json?access_token=${process.env.GEOCODE_ACCESS_TOKEN}&limit=1`

	request({ url, json: true }, (err, res, body) => {
		callback(err, body)
	})
}

module.exports = geocode
