import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

export default function Header({ pages }) {
  return (
    <div className="header">
      <NavLink to="/">
        <hgroup className="header-title">
          <h1>Austin Thaldorf-Huelsbeck</h1>
          <h2>Full-Stack Web Developer</h2>
        </hgroup>
      </NavLink>
      <NavBar pages={pages} />
    </div>
  );
}
