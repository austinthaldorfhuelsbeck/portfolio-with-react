import React from "react";
import ReactDOM from "react-dom";
import SiteNav from "./components/SiteNav/SiteNav";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import PortfolioContent from "./components/PortfolioContent/PortfolioContent";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <SiteNav />
    <SiteHeader />
    <PortfolioContent />
    <SiteFooter />
  </React.StrictMode>,
  document.getElementById("root")
);
