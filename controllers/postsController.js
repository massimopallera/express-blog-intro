const posts = require('../data/posts.js')

function index(rq,res){
  res.json(posts.createPosts())
}

module.exports = {index}
