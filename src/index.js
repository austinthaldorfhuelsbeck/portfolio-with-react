import React from "react";
import ReactDOM from "react-dom";
import SiteNav from "./components/SiteNav/SiteNav";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import PortfolioIntro from "./components/PortfolioIntro/PortfolioIntro";
import PortfolioContent from "./components/PortfolioContent/PortfolioContent";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import { data } from "./data";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <SiteNav data={data} />
    <header id="site-header">
      <div className="container">
        <SiteHeader />
        <PortfolioIntro data={data} />
      </div>
    </header>
    <PortfolioContent data={data} />
    <SiteFooter data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
