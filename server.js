const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const PORT = process.env.PORT || 3000

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

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
