import React from "react";
import ReactDOM from "react-dom";
import SiteNav from "./SiteNav/SiteNav";
import SiteHeader from "./SiteHeader/SiteHeader";
import SiteInit from "./SiteInit/SiteInit";
import "./index.css";

const pages = ["Sites", "Apps", "About", "Contact", "Resume", "Blog"];

ReactDOM.render(
  <React.StrictMode>
    <div className="container" data-aos="fade-up">
      <SiteHeader />
      <SiteNav pages={pages} />
      <SiteInit />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
