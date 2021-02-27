import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";
import CategorySection from "./CategorySection/CategorySection";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  const data = require("./data.json");

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  //// DATA ////
  const appsSubtitle = data.apps.subtitle;
  const appsItems = data.apps.appsItems;
  const sitesSubtitle = data.apps.subtitle;
  const sitesItems = data.sites.sitesItems;
  const aboutImgData = data.about;

  const pages = Object.keys(data);
  const socials = {
    GitHub: "https://github.com/austinthaldorfhuelsbeck",
    Twitter: "https://twitter.com/blackmetallotus",
    Facebook: "https://www.facebook.com/austin.huelsbeck",
    LinkedIn: "https://www.linkedin.com/in/austinhuelsbeck",
  };

  //// PROPS ////
  const appsProps = {
    title: "apps",
    subtitle: appsSubtitle,
    itemsList: appsItems,
  };
  const sitesProps = {
    title: "sites",
    subtitle: sitesSubtitle,
    itemsList: sitesItems,
  };
  const aboutProps = {
    title: "about",
    data: aboutImgData,
  };

  return (
    <div className="container">
      <Router>
        <Header pages={pages} />
        <Switch>
          <Route exact path="/">
            <div className="home">
              <Home />
            </div>
          </Route>
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
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
      <Footer socials={socials} />
    </div>
  );
}
