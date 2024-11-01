// const posts = require('../data/posts.js')

function createMarkupPosts(req, res){
  const posts = require('../data/posts.js')
  let markup = ''

  posts.forEach(element => {
    const {title, content, img} = element
    
    markup+= `
    <li>
      <h3>${title}</h3>
      <p>${content}</p>
      <img src="${img}" alt="">
    </li>
    
    `
  })
  res.send(markup)
}

module.exports = createMarkupPosts