import React from "react";

function PortfolioIntro({ data }) {
  // find the headshot url and title
  const href = data.Home.photoUrl;
  const title = data.Home.photoTitle;

  return (
    <div id="portfolio-intro">
      <div id="header-photo">
        <img src={href} title={title} className="circle-img" />
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
  );
}

export default PortfolioIntro;
