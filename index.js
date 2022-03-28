const express = require('express')
const adaro = require('adaro')

const app = express()

app.use(express.static('public'));

const {tasks} = require('./tasks')

app.get('/', (req, res) => {
    res.render('index', {
        "title": "ToDo List",
        tasks  
        })
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
})

app.engine('dust', adaro.dust({}));
app.set('view engine', 'dust');