import ProjectCard from "./ProjectCard"
import heroImage from "../assets/hero.png"

const projects = [
  {
    name: "Reamus",
    image: heroImage,
    description: "An API that converts HTML to PDFs, built for developers who need reliable server-side rendering.",
    link: "https://github.com/btfcookies",
  },
  {
    name: "Titanitron",
    image: heroImage,
    description: "A supervised learning model trained to predict survivors of the Titanic's sinking.",
    link: "https://github.com/btfcookies/titanic-prediction",
  },
]

function Work() {
  return (
    <div className="page">
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Work
