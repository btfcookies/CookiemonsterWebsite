import { useEffect, useState } from "react"

function ProjectCard(props) {
  const { name, image, description, link } = props
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-card-image" />
      <h3 className="project-card-title">{name}</h3>
      <button
        type="button"
        className="project-card-button"
        onClick={() => setIsOpen(true)}
      >
        View Project
      </button>

      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h3 id="project-modal-title" className="modal-title">{name}</h3>
            <p className="modal-description">{description}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bio-link"
              >
                Visit project
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
