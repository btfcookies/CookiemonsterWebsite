/**
 * @typedef {object} BlogImage
 * @property {string} src     Imported asset (from src/assets/...) or a path under public/ such as "/doge.jpg".
 * @property {string} [caption] Text shown under the image. Optional.
 * @property {string} [alt]     Screen-reader text. Falls back to the caption, then to "".
 */

/**
 * Splits text on //math// segments and wraps each one in a math-styled span.
 * @param {string} text
 */
function renderWithMath(text) {
  return text.split(/\/\/(.+?)\/\//g).map((part, index) =>
    index % 2 === 1 ? (
      <span className="blog-post-math" key={index}>{part}</span>
    ) : (
      part
    )
  )
}

/**
 * @param {{ title: string, date: string, text: string, images?: BlogImage[] }} props
 */
function BlogPost(props) {
  const { title, date, text, images = [] } = props

  return (
    <article className="blog-post">
      <h1 className="blog-post-title"><span className="hash"># </span>{title}</h1>
      <p className="blog-post-date">{date}</p>
      <p className="blog-post-text">{renderWithMath(text)}</p>
      {images.length > 0 && (
        <div className="blog-post-images">
          {images.map((image) => (
            <figure className="blog-post-figure" key={image.src}>
              <img
                className="blog-post-image"
                src={image.src}
                alt={image.alt ?? image.caption ?? ""}
                loading="lazy"
              />
              {image.caption && (
                <figcaption className="blog-post-caption">{image.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </article>
  )
}

export default BlogPost
