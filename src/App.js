import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import CategorySection from "./CategorySection/CategorySection"
import About from "./About/About"
import Resume from "./Resume/Resume"
import Footer from "./Footer/Footer"
import NavBar from "./NavBar/NavBar"

import Aos from "aos"
import "aos/dist/aos.css"

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  //// DATA ////
  const pages = ["apps", "thinkful", "sites", "about", "resume"]
  const socials = {
    GitHub: "https://github.com/austinthaldorfhuelsbeck",
    Twitter: "https://twitter.com/blackmetallotus",
    Facebook: "https://www.facebook.com/austin.huelsbeck",
    LinkedIn: "https://www.linkedin.com/in/austinhuelsbeck",
  }

  return (
    <div className="container">
      <Router>
        <div className="content">
          <NavBar pages={pages} />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route path="/:category">
              <CategorySection />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer socials={socials} />
    </div>
  )
}
