const posts = require('../data/posts.js')

function index(req,res){
  res.json(posts)
}

module.exports = index
