import React from "react";

function SiteHeader() {
  return (
    <header id="site-header">
      <div className="container">
        <hgroup className="header-title">
          <h1>Austin Thaldorf-Huelsbeck</h1>
          <h2>Full-Stack Web Developer</h2>
        </hgroup>

        <div id="header-photo">
          <img
            src="../img/huelsbeck-headshot.jpg"
            alt="Austin Thaldorf-Huelsbeck"
            title="Photo by: Henry Tieu Photography"
            className="circle-img"
          />
        </div>

        <div className="header-intro" data-nav="home">
          <p>Welcome to my portfolio!</p>
          <p>I'm a web developer with a background in video and design.</p>
          <p>
            Always striving to match <em>beautiful</em> with{" "}
            <strong>functional</strong>.
          </p>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
