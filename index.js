const express = require('express')

const app = express()

const {tasks} = require('./tasks')

app.get('/', (req, res) => {
    res.json(tasks)
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
})