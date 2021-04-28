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
  const data = require("./data.json")

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  //// DATA ////
  const appsSubtitle = data.apps.subtitle
  const appsItems = data.apps.appsItems
  const sitesSubtitle = data.apps.subtitle
  const sitesItems = data.sites.sitesItems
  const aboutImgData = data.about
  const thinkfulItems = data.apps.appsItems[0]

  const pages = Object.keys(data)
  const socials = {
    GitHub: "https://github.com/austinthaldorfhuelsbeck",
    Twitter: "https://twitter.com/blackmetallotus",
    Facebook: "https://www.facebook.com/austin.huelsbeck",
    LinkedIn: "https://www.linkedin.com/in/austinhuelsbeck",
  }

  //// PROPS ////
  const appsProps = {
    title: "apps",
    subtitle: appsSubtitle,
    itemsList: appsItems,
  }
  const sitesProps = {
    title: "sites",
    subtitle: sitesSubtitle,
    itemsList: sitesItems,
  }
  const aboutProps = {
    title: "about",
    data: aboutImgData,
  }

  return (
    <div className="container">
      <Router>
        <div className="content">
          <NavBar pages={pages} />
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/sites">
              <CategorySection {...sitesProps} />
            </Route>
            <Route path="/apps">
              <CategorySection {...appsProps} />
            </Route>
            <Route path="/about">
              <About {...aboutProps} />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            {/* <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/thinkful">
              <Thinkful item={thinkfulItems} />
            </Route> */}
          </Switch>
        </div>
      </Router>
      <Footer socials={socials} />
    </div>
  )
}
