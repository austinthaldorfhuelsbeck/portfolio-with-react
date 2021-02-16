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

  //// DATA ////
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
  const caption = (
    <div className="about-caption">
      <p>
        I live up among the pines in beautiful Seattle, WA. During the day, I
        create content for the web as a part of a marketing team for a
        non-profit. In the evenings, I'm studying web development as a part of{" "}
        <a href="https://www.thinkful.com" target="_blank">
          Thinkful
        </a>
        's Full Stack Engineering program.
      </p>

      <p>
        Building, creating, and fine-tuning is where I feel at home. Whether
        it's solving a design challenge, or editing a feature film, I've always
        gravitated towards the problem-solving side of creative fields. Learning
        to code has brought that problem-solving, engineering-mindedness into
        full focus. My training in digital marketing &amp; filmmaking inform the
        design side&mdash;Who is this for? How will they experience it? How will
        they <em>find</em> it?&mdash;while my passion for math, logic &amp;
        engineering informs the coding side. (Those Calculus credits{" "}
        <strong>did</strong> come in handy after all!)
      </p>

      <p>
        While building websites and interactive apps alone has been rewarding,
        my goal is to be able to create within a team development setting as
        soon as possible. My experience has taught me that collaboration is the
        key to creating amazing results and sharpening your own skills. I never
        like to be the smartest person in the room&mdash;I am always looking for
        the next opportunity to learn, and being around great programmers is the
        best way to make that happen.
      </p>

      <p>
        Learning HTML, CSS, and JavaScript has already allowed me to design a
        handful of basic websites. I aim to design more apps to live on the web
        as I continue my education. With tools like React, Node &amp; Express, I
        plan to design &amp; build fully-functional webapps from conception to
        delivery.
      </p>
    </div>
  );
  const aboutImgData = {
    url: "./#about",
    imageUrl:
      "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/Emily-Austin-Elopement-94.jpg",
    imageTitle: "Photo by: Henry Tieu Photography",
  };

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
      <ImageAndCaption title="About" caption={caption} data={aboutImgData} />
      <ContactForm title="Contact" />
    </div>
  );
}
