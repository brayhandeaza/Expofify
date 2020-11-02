const express = require('express')
const bodyParder = require('body-parser')
const app = express()
const db = require('./db')

//Routes 
const Users = require('./routes/Users') 
const Albums = require('./routes/Albums') 
const Artist = require('./routes/Artist') 
const Genres = require('./routes/Genres') 
const Songs = require('./routes/Songs') 

app.use(bodyParder.json())

app.use('/users', Users)
app.use('/albums', Albums)
app.use('/artists', Artist)
app.use('/genres', Genres)
app.use('/songs', Songs)


app.get('/', async (req,res) => {
    res.json({
        status: "Ok",
        message: "Welcome to React Native Spotify"
    })
})


db.authenticate().then((res) => {
    console.log("Database is connected")
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port: ${port}`) 
})