const express = require('express')
const adaro = require('adaro')

const app = express()

const {tasks} = require('./tasks')

const {data} = require('./tasks')

app.get('/', (req, res) => {
    res.render('index', {
        "title": "Famous People", 
        "names" : [{ "name": "Larry" },{ "name": "Curly" },{ "name": "Moe" }]
       })
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
})

app.engine('dust', adaro.dust({}));
app.set('view engine', 'dust');