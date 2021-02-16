import React, { useState, useEffect } from "react";
import SiteNav from "./SiteNav/SiteNav";
import SiteHeader from "./SiteHeader/SiteHeader";
import SiteInit from "./SiteInit/SiteInit";
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

  return (
    <div className="container" data-aos="fade-up">
      <SiteHeader />
      <SiteNav pages={pages} />
      <SiteInit />
    </div>
  );
}
