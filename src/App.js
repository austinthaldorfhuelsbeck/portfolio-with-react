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
  const pages = ["apps", "sites", "about", "resume", "blog"];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  //// DATA ////
  const sitesItems = [
    {
      name: "Black Static Visuals",
      url: "blackstaticvisuals",
      photoUrl:
        "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/black-static.jpg",
      technologies: ["HTML", "CSS"],
    },
    {
      name: "Austin + Emily Creative",
      url: "austinandemilycreative",
      photoUrl:
        "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/austin-emily.jpg",
      technologies: ["jQuery", "Flex", "SCSS"],
    },
    {
      name: "PawPaw Vintage",
      url: "pawpawvintage",
      photoUrl:
        "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/denim.jpg",
      technologies: ["Shopify", "React"],
    },
  ];
  const appsItems = [
    {
      name: "Thinkful",
      url: "thinkful",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQ5dwSyrkBbVBSvGSay2zYubwQjv81KB9hw&usqp=CAU",
      technologies: ["React", "jQuery", "Node", "Express", "PostgreSQL"],
    },
    {
      name: "Transcriber",
      url: "transcriber",
      photoUrl:
        "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/placeholder.jpg",
      technologies: ["React", "Node", "Express", "PostgreSQL"],
    },
  ];
  const aboutImgData = {
    url: "./#about",
    imageUrl:
      "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/Emily-Austin-Elopement-94.jpg",
    imageTitle: "Photo by: Henry Tieu Photography",
  };

  //// PROPS ////
  const sitesProps = {
    title: "sites",
    subtitle: "Sites that I've designed that now reside on the Internet.",
    itemsList: sitesItems,
  };
  const appsProps = {
    title: "apps",
    subtitle: "Apps that I've designed, on the Internet or otherwise.",
    itemsList: appsItems,
  };
  const aboutProps = {
    title: "about",
    data: aboutImgData,
  };
  const socials = {
    GitHub: "https://github.com/austinthaldorfhuelsbeck",
    Twitter: "https://twitter.com/blackmetallotus",
    Facebook: "https://www.facebook.com/austin.huelsbeck",
    LinkedIn: "https://www.linkedin.com/in/austinhuelsbeck",
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
