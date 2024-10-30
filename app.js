const express = require('express')
const posts = require('./data/posts.js')

const app = express()
const host = 'http://127.0.0.1'
const port = 3000

app.get('/', (req,res) => {
  res.send("<h1>Benvenuto nel mio blog</h1>")
})

app.get('/posts', (rq,res) => {
  res.json(posts.createPosts())
})

app.listen(port,()=>{
  console.log(`Listening on ${host}:${port}`);
  
})