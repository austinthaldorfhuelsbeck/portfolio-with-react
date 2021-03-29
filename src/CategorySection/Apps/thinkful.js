import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import CategoryHeader from "../CategoryHeader";
import Pomodoro from "./Thinkful/Pomodoro";
import Flashcards from "./Thinkful/Flashcards";
import Grubdash from "./Thinkful/Grubdash";
import WeLoveMovies from "./Thinkful/WeLoveMovies";

export default function Thinkful({ item }) {
  const { url } = useRouteMatch();

  const title = item.title;
  const subtitle = item.subtitle;
  const itemsList = item.itemsList;

  // Build the list element
  const items = itemsList.map((item, index) => (
    <li key={index} className="category-item">
      <Link to={`${url}/${item.url}`}>
        <img
          className="darkened circle-img md-img"
          alt={item.name}
          src={item.photoUrl}
        />
        <h2 className="over-img">{item.title}</h2>
      </Link>
    </li>
  ));

  return (
    <section className="category-section" id="{title}" data-nav="{title}">
      <CategoryHeader title={title} subtitle={subtitle} />
      <Switch>
        <Route exact path="/thinkful">
          <ul className="category-thumbnails flex-container" data-aos="fade-up">
            {items}
          </ul>
        </Route>
        <Route path="/thinkful/pomodoro">
          <Pomodoro />
        </Route>
        <Route path="/thinkful/flashcards">
          <Flashcards />
        </Route>
        <Route path="/thinkful/grubdash">
          <Grubdash />
        </Route>
        <Route path="/thinkful/welovemovies">
          <WeLoveMovies />
        </Route>
      </Switch>
    </section>
  );
}
