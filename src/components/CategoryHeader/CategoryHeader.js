import React from "react";
import CategorySection from "../PortfolioContent/CategorySection";

function CategoryHeader({ title, subtitle = null }) {
  const subtitleElement = subtitle ? <p>{subtitle}</p> : <></>;
  return (
    <header className="category-header" data-aos="fade-up">
      <h1 className="category-title">{title}</h1>
      <hr />
      {subtitleElement}
    </header>
  );
}

export default CategoryHeader;
