const express = require('express')
const drugRoutes = require('./routes/drugs.js')

const app = express()

app.use('/drugs', drugRoutes)

app.use('/', (req, res) => {
    res.status(200).send('<h1>Hello</h1>')
})

app.listen(8080, () => {
    console.log('Listening')
});