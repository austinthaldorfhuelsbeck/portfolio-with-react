import React from "react";
import CategoryHeader from "./CategoryHeader";

function CategorySection({ title, subtitle, itemsList }) {
  // Build the list element
  const items = itemsList.map((item, index) => (
    <li key={index} className="category-item">
      <a title={item.name} href={item.url}>
        <img
          className="darkened circle-img md-img"
          alt={item.name}
          src={item.photoUrl}
        />
        <p className="over-img">{item.name}</p>
      </a>
    </li>
  ));

  // Build the section and return
  return (
    <section
      className="category-section"
      id="{title.toLowerCase}"
      data-nav="{title.toLowerCase}"
    >
      <CategoryHeader title={title} subtitle={subtitle} />
      <ul className="category-thumbnails flex-container" data-aos="fade-up">
        {items}
      </ul>
    </section>
  );
}

export default CategorySection;
