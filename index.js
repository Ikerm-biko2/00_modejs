const express = require('express')
const adaro = require('adaro')

const app = express()

const {tasks} = require('./tasks')

app.get('/', (req, res) => {
    res.render('index', {
        "title": "Tasks Manager",
        "tasks" : [
                { "task": "Making first node express steps"},
                { "task": "Rendering something"},
                { "task": "JS CSS HTML DUSTJS NODEJS"},
                { "task": "Primerity"},
                { "task": "El Corte Inglés"}
            ]
        })
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
})

app.engine('dust', adaro.dust({}));
app.set('view engine', 'dust');