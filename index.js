const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

const app = express()
app.use(bodyParser.json())//json ve nodejs e  çeviriyor

//WS Metodları
app.get('/api/hello', (req, res) => {

    res.send('Hello World')
})

app.get('/api/merhaba', (req, res) => {

    res.send('Merhaba Dünya')
})

app.post('/api/name', (req, res) => {

    const body = _.pick(req.body, ['firstName','lastName'])
    console.log(body)
    res.send('Merhaba '+body.firstName+' '+body.lastName)
})
//WS Metodları

//app 8080 portundan ayağa kalksın
app.listen(8080, () => {
    console.log('app server is running')
})