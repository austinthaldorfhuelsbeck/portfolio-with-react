import React, { useEffect } from "react";
import CategoryHeader from "../CategoryHeader/CategoryHeader";
import Aos from "aos";
import "aos/dist/aos.css";

function CategorySection({ title, subtitle, data }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Find the list items
  const itemsList = data[title][title];
  // Build the list element
  const items = itemsList.map((item, index) => (
    <li key={index} data-aos="fade-up" className="category-item">
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
      <ul className="category-thumbnails flex-container">{items}</ul>
    </section>
  );
}

export default CategorySection;
