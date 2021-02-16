import React from "react";
import NavItem from "./NavItem/NavItem";

export default function SiteNav(props) {
  const pagesList = props.pages.map((page, index) => {
    return <li key={index}>{page}</li>;
  });

  return (
    <nav id="site-nav">
      <ul id="menu">{pagesList}</ul>
    </nav>
  );
}
