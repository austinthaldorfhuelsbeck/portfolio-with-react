import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";

import BlackStaticVisuals from "./Sites/BlackStaticVisuals";
import Thinkful from "./Apps/Thinkful";

function CategorySection({ title, url, subtitle, itemsList }) {
  // Build the list element
  const items = itemsList.map((item, index) => (
    <li key={index} className="category-item">
      <Link to={`/${item.url}`}>
        <img
          className="darkened circle-img md-img"
          alt={item.name}
          src={item.photoUrl}
        />
        <p className="over-img">{item.title}</p>
      </Link>
    </li>
  ));

  // Build the section and return
  return (
    <section
      className="category-section"
      id="{title.toLowerCase}"
      data-nav="{title.toLowerCase}"
    >
      <CategoryHeader title={title} url={url} subtitle={subtitle} />
      <Switch>
        <Route exact path="/:title">
          <ul className="category-thumbnails flex-container" data-aos="fade-up">
            {items}
          </ul>
        </Route>
        <Route path="/:title/blackstaticvisuals">
          <BlackStaticVisuals item={itemsList[0]} />
        </Route>
      </Switch>
    </section>
  );
}

export default CategorySection;
