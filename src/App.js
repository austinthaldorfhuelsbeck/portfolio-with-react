import React, { useState } from "react";
import SiteNav from "./SiteNav/SiteNav";
import SiteHeader from "./SiteHeader/SiteHeader";
import SiteInit from "./SiteInit/SiteInit";
import "./index.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const pages = ["Sites", "Apps", "About", "Contact", "Resume", "Blog"];
  const navProps = {
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    pages: pages,
  };

  return (
    <div>
      <SiteHeader />
      <SiteNav {...navProps} />
      <SiteInit />
    </div>
  );
}
