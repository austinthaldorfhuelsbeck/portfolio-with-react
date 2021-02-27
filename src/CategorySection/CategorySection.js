import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";

import BlackStaticVisuals from "./Sites/BlackStaticVisuals";

function CategorySection({ title, subtitle, itemsList }) {
  const { url } = useRouteMatch();

  // Build the list element
  const items = itemsList.map((item, index) => (
    <li key={index} className="category-item">
      <Link to={`${url}/${item.url}`}>
        <img
          className="darkened circle-img md-img"
          alt={item.name}
          src={item.photoUrl}
        />
        <p className="over-img">{item.name}</p>
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
      <CategoryHeader title={title} subtitle={subtitle} />
      <Switch>
        <Route exact path="/:title">
          <ul className="category-thumbnails flex-container" data-aos="fade-up">
            {items}
          </ul>
        </Route>
        <Route path="/:title/blackstaticvisuals">
          <BlackStaticVisuals />
        </Route>
      </Switch>
    </section>
  );
}

export default CategorySection;
