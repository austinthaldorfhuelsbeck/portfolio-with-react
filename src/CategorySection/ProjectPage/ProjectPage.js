import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProjectPage() {
  const { projectId } = useParams()
  const API_URL = "https://portfolio-api-nine.vercel.app/projects"
  const [project, setProject] = useState({})
  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/${projectId}`)
      .then((response) => response.json())
      .then((response) => response.data)
      .then(setProject)
      .catch((err) => {
        console.log(err)
      })

    fetch(`${API_URL}/${projectId}/technologies`)
      .then((response) => response.json())
      .then((response) => response.data)
      .then(setTechnologies)
      .catch((err) => {
        console.log(err)
      })
  }, [projectId])

  const technologiesUsed = technologies.map((technology) => (
    <i className={`fab fa-${technology.name} fa-lg`}></i>
  ))

  return (
    <main>
      <div class="project-content justify">
        <h3 className="justify" data-aos="fade-up">
          <a href={project.deployment_url} rel="noreferrer" target="_blank">
            Visit Site &rarr;
          </a>
        </h3>
        <div data-aos="fade-up">Technologies Used: {technologiesUsed}</div>
        <div id="screenshot" className="flex-container" data-aos="fade-up">
          <img
            src={project.screenshot_url}
            alt={project.title}
            title={project.title}
            className="inset-image"
          />
        </div>
        <section
          className="category-section"
          id="project-content"
          data-aos="fade-up"
        >
          <div dangerouslySetInnerHTML={{ __html: project.caption }} />
          <br />
          <h3 className="justify" data-aos="fade-up">
            <a href={project.repo_url} rel="noreferrer" target="_blank">
              Github Repo &rarr;
            </a>
          </h3>
        </section>
      </div>
    </main>
  )
}
