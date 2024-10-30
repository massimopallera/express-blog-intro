const express = require('express')
const printPosts = require('./controllers/postsController.js')

const app = express()
const host = 'http://127.0.0.1'
const port = 3000

app.get('/', (req,res) => {
  res.send("<h1>Benvenuto nel mio blog</h1>")
})

app.get('/posts', printPosts.index)

app.listen(port,()=>{
  console.log(`Listening on ${host}:${port}`);
  
})