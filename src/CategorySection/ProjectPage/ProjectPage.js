import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ScrollToTop from "../../Components/ScrollToTop"

export default function ProjectPage() {
  const { projectId } = useParams()
  const API_URL = "http://localhost:5000/projects/"
  const [project, setProject] = useState({})

  useEffect(() => {
    fetch(`${API_URL}/${projectId}`)
      .then((response) => response.json())
      .then((response) => response.data)
      .then(setProject)
      .catch((err) => {
        console.log(err)
      })
  }, [projectId])

  return (
    <main>
      <div class="project-content">
        <h3 className="justify" data-aos="fade-up">
          <a href={project.deployment_url} rel="noreferrer" target="_blank">
            Visit Site &rarr;
          </a>
        </h3>
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
      <ScrollToTop />
    </main>
  )
}
