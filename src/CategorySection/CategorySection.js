import { useState, useEffect } from "react"
import { Link, useParams, useRouteMatch } from "react-router-dom"
import CategoryHeader from "./CategoryHeader"

export default function CategorySection() {
  const url = useRouteMatch().url
  const { category } = useParams()
  const API_URL = "http://localhost:5000/projects/category"

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/${category}`)
      .then((response) => response.json())
      .then((response) => response.data)
      .then(setProjects)
      .catch((err) => {
        console.log(err)
      })
  }, [category])

  const projectThumbnails = projects.map((project, index) => (
    <li key={index} className="category-item">
      <Link to={`${url}/${project.project_id}`}>
        <img
          className="darkened circle-img md-img"
          alt={project.title}
          src={project.thumbnail_url}
        />
        <h2 className="over-img">{project.title}</h2>
      </Link>
    </li>
  ))

  // Build the section and return
  return (
    <section
      className="category-section"
      id="{category.toLowerCase}"
      data-nav="{category.toLowerCase}"
    >
      <CategoryHeader title={category} />
      <ul className="category-thumbnails flex-container" data-aos="fade-up">
        {projectThumbnails}
      </ul>
    </section>
  )
}
