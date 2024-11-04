const express = require('express')
// const path = require('path')
const markupsController = require('./controllers/markupsController.js')

const printPosts = require('./controllers/postsController.js')

const app = express()
const host = 'http://127.0.0.1'
const port = 3000


app.use('/public',express.static('public'))

app.get('/', (req,res) => {
  res.send("<h1>Benvenuto nel mio blog</h1>")
})

app.get('/posts', printPosts)

app.get('/static.html',markupsController)


app.listen(port,()=>{
  console.log(`Listening on ${host}:${port}`);
})