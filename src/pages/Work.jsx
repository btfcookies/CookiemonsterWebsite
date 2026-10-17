import ProjectCard from "./ProjectCard"
import cecosunkImage from '../assets/favicon-light.svg'

const projects = [
  {
    name: "TAD Chat",
    image: null,
    description: "TAD Chat is a forum made for students to communicate.",
    link: "https://chat.lawrencetong.dev",
  },
  {
    name: "Titanitron",
    image: null,
    description: "A supervised learning model trained to predict survivors of the Titanic's sinking.",
    link: "https://github.com/btfcookies/titanic-prediction",
  },
  {
    name: "CeCoSUNK",
    image: cecosunkImage,
    description: "CeCoSUNK is a browser based mathematically accurate celestial physics simulator.",
    link: "https://cecosunk.lawrencetong.dev"
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
