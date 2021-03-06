import React from "react"
import ScrollToTop from "../Components/ScrollToTop"

export default function Footer({ socials }) {
  // Get socials
  const socialList = Object.keys(socials)
  const socialUrls = Object.values(socials)

  // Build list
  const socialLinks = socialList.map((social, index) => {
    const href = socialUrls[index]
    const title = `Austin on ${social}`
    const className = `fa fa-${social.toLowerCase()}`
    return (
      <li key={index}>
        <a href={href} title={title} target="_blank">
          <i className={className}></i>
        </a>
      </li>
    )
  })

  // Build component and return
  return (
    <footer className="footer">
      <ScrollToTop />
      <ul className="links flex-icons">{socialLinks}</ul>

      <div className="email-info flex-container">
        <a href="mailto:austinthaldorfhuelsbeck@gmail.com">
          <u>austinthaldorfhuelsbeck@gmail.com</u>
        </a>
      </div>
    </footer>
  )
}
