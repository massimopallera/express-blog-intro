function createPosts(){
  const posts = []

  for(let i = 0; i<5; i++){
    
    const title = `title${i}`
    const content = `content${i}`
    const img = `url${i}`
    const tags = ["a lot of tags"]

    const post = {title, content, img, tags}

    posts.push(post)
  }

  return {
    posts,
    length : posts.length
  }
}



module.exports = {createPosts}