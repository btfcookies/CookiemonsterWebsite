import BlogPost from "./BlogPost.jsx"
import blogPosts from "../data/blogPosts.js"

function Blog() {
  return (
    <div className="page">
      <h1 className="section-header page-header">Blog</h1>
      <div className="blog-post-list">
        {blogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </div>
  )
}

export default Blog
