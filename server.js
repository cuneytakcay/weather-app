const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

// Routes - Home
app.get('/', (req, res) => {
	res.send('Weather App, in progress...')
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
