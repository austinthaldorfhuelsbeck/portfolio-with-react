import React from "react";

function CategorySection({ title, subtitle, data }) {
  // Find the list items
  const itemsList = data[title][title];
  // Build the list element
  const items = itemsList.map((item, index) => (
    <li key={index}>
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
      <header className="category-header">
        <h1 className="category-title">{title}</h1>
        <hr />
        <p>{subtitle}</p>
      </header>

      <ul className="category-thumbnails flex-container">{items}</ul>
    </section>
  );
}

export default CategorySection;
