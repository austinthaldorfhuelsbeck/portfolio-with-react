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

  return (
    <div className="container" data-aos="fade-up">
      <SiteHeader />
      <SiteNav pages={pages} />
      <SiteInit />
      <CategorySection
        title="Sites"
        subtitle="Sites that I've designed that now reside on the Internet."
        data={data}
      />
      <CategorySection
        title="Apps"
        subtitle="Apps that I've designed, on the Internet or otherwise."
        data={data}
      />
      <ImageAndCaption title="About" caption={caption} data={data} />
      <ContactForm title="Contact" />
    </div>
  );
}
