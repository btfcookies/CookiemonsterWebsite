function BlogPost(props) {
  const { title, date, text } = props

  return (
    <article className="blog-post">
      <h1 className="blog-post-title"><span className="hash"># </span>{title}</h1>
      <p className="blog-post-date">{date}</p>
      <p className="blog-post-text">{text}</p>
    </article>
  )
}

export default BlogPost
