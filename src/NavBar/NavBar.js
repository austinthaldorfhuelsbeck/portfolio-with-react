import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar({ pages }) {
  const pagesList = pages.map((page, index) => {
    const link = `/${page}`
    return (
      <li key={index}>
        <NavLink to={link}>{page}</NavLink>
      </li>
    )
  })

  return (
    <nav id="site-nav">
      <ul id="menu">{pagesList}</ul>
    </nav>
  )
}
