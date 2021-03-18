const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')

const app = express()
const PORT = 3000

// Define paths
const publicDirPath = path.join(__dirname, '/public')
const partialsDirPath = path.join(__dirname, '/views/partials')

// Set up templating engine
app.set('view engine', 'hbs')
hbs.registerPartials(partialsDirPath)

// Access public directory to use static files
app.use(express.static(publicDirPath))

// Routes - Home
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Check Weather',
	})
})

app.get('/weather', (req, res) => {
	const address = req.query.address
	if (!address) {
		return res.send({
			err: 'Please enter an address...',
		})
	}

	geocode(address, (err, data) => {
		console.log('err', err)
		console.log('data', data)
	})
})

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		errorMessage: 'Page cannot be found!',
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
