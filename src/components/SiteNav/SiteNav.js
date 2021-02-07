import React from "react";

function SiteNav() {
  return (
    <nav id="site-nav">
      <ul id="menu">
        <li>
          <a title="home" href="./">
            Home
          </a>
        </li>
        <li>
          <a title="sites" href="./#sites">
            Sites
          </a>
        </li>
        <li>
          <a title="apps" href="./#apps">
            Apps
          </a>
        </li>
        <li>
          <a title="about" href="./#about">
            About
          </a>
        </li>
        <li>
          <a title="contact" href="./#contact">
            Contact
          </a>
        </li>
        <li>
          <a title="resume" href="./resume.html">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SiteNav;
