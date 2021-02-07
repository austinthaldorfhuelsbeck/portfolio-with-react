import React from "react";
import SiteNav from "./SiteNav/SiteNav";
import SiteHeader from "./SiteHeader/SiteHeader";
import PortfolioContent from "./PortfolioContent/PortfolioContent";
import SiteFooter from "./SiteFooter/SiteFooter";
import "./App.css";

function App() {
  return (
    <div id="portfolio">
      <SiteNav />
      <SiteHeader />
      <PortfolioContent />
      <SiteFooter />
    </div>
  );
}

export default App;
