import React, { useState, useEffect } from "react";
import SiteNav from "./SiteNav/SiteNav";
import SiteHeader from "./SiteHeader/SiteHeader";
import SiteInit from "./SiteInit/SiteInit";
import CategorySection from "./PortfolioContent/CategorySection/CategorySection";
import ImageAndCaption from "./PortfolioContent/ImageAndCaption/ImageAndCaption";
import ContactForm from "./ContactForm/ContactForm";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const pages = ["Sites", "Apps", "About", "Contact", "Resume", "Blog"];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function handleNavClick(pageTitle) {
    setCurrentPage(pageTitle);
  }

  const sitesItems = [
    {
      name: "Black Static Visuals",
      url:
        "https://austinthaldorfhuelsbeck.github.io/AustinThaldorfHuelsbeck-projects/blackstaticvisuals.html",
      photoUrl:
        "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/black-static.jpg",
      technologies: ["HTML", "CSS"],
    },
    {
      name: "Austin + Emily Creative",
      url:
        "https://austinthaldorfhuelsbeck.github.io/AustinThaldorfHuelsbeck-projects/austinandemily.html",
      photoUrl:
        "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/austin-emily.jpg",
      technologies: ["jQuery", "Flex", "SCSS"],
    },
    {
      name: "PawPaw Vintage",
      url: "",
      photoUrl:
        "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/placeholder.jpg",
      technologies: ["Shopify", "React"],
    },
  ];

  const appsItems = [
    {
      name: "Thinkful",
      url: "",
      photoUrl:
        "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/placeholder.jpg",
      technologies: ["React", "jQuery", "Node", "Express", "PostgreSQL"],
    },
    {
      name: "Arena Decklist Database",
      url: "",
      photoUrl:
        "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/placeholder.jpg",
      technologies: ["React", "Node", "Express"],
    },
  ];

  return (
    <div className="container" data-aos="fade-up">
      <SiteHeader />
      <SiteNav pages={pages} />
      <SiteInit />
      <CategorySection
        title="Sites"
        subtitle="Sites that I've designed that now reside on the Internet."
        itemsList={sitesItems}
      />
      <CategorySection
        title="Apps"
        subtitle="Apps that I've designed, on the Internet or otherwise."
        itemsList={appsItems}
      />
      {/* <ImageAndCaption title="About" caption={caption} data={data} /> */}
      <ContactForm title="Contact" />
    </div>
  );
}
