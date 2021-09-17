const express = require('express')
const path = require('path')
const cors = require('cors')
const axios = require('axios')
const { response } = require('express')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.use("/static", express.static('./static'))
app.use('/static', express.static(__dirname + 'static'))


app.listen(3003)
