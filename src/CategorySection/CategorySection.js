import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";

import BlackStaticVisuals from "./Sites/BlackStaticVisuals";
import AustinAndEmilyCreative from "./Sites/AustinAndEmilyCreative";
import PawPawVintage from "./Sites/PawPawVintage";

function CategorySection({ title, subtitle, itemsList }) {
  const { url } = useRouteMatch();

  // Build the list element
  const items = itemsList.map((item, index) => (
    <li key={index} className="category-item">
      <Link
        to={item.url === "thinkful" ? `/${item.url}` : `${url}/${item.url}`}
      >
        <img
          className="darkened circle-img md-img"
          alt={item.name}
          src={item.photoUrl}
        />
        <h2 className="over-img">{item.title}</h2>
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
          <BlackStaticVisuals item={itemsList[2]} />
        </Route>
        <Route path="/:title/austinandemilycreative">
          <AustinAndEmilyCreative item={itemsList[1]} />
        </Route>
        <Route path="/:title/pawpawvintage">
          <PawPawVintage item={itemsList[1]} />
        </Route>
      </Switch>
    </section>
  );
}

export default CategorySection;
