import React from "react";
import { NavLink } from "react-router-dom";

export default function SiteHeader() {
  return (
    <NavLink to="/">
      <hgroup className="header-title">
        <h1>Austin Thaldorf-Huelsbeck</h1>
        <h2>Full-Stack Web Developer</h2>
      </hgroup>
    </NavLink>
  );
}
