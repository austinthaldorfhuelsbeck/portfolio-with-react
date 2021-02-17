import React from "react";

export default function SiteInit() {
  const url =
    "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/huelsbeck-headshot.jpg";
  const title = "Photo by: Henry Tieu Photography";

  return (
    <div id="portfolio-intro" data-aos="fade-up">
      <div id="header-photo">
        <img src={url} title={title} className="circle-img" />
      </div>

      <div className="header-intro">
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
