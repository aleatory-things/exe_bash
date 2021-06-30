const express = require('express')
const { exec } = require('child_process')
const app = express()

app.listen(3000, () => console.log('Connected'))


app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html')
})

app.get('/container', (req, res) => {
    res.status(200).json({ message: 'Container'})
})

app.get('/bash', (req, res) => {
    exec('./script.sh', (error, stdout, stderr) => {
        if(!error){
            console.log('All went well')
        } else {
            console.log(error)
        }
    })
    res.status(200).json({ message: 'Bash'})
})
