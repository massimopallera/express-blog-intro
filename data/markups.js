const posts = require('../data/posts.js')

function createMarkupPosts(){
  let markup = ''

  console.log('markup');
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
  return markup

}

module.exports = createMarkupPosts