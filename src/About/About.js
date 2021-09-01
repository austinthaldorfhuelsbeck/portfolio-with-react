import React from "react"
import CategoryHeader from "../CategorySection/CategoryHeader"
// import "../stars.css"

export default function About() {
  const url =
    "https://raw.githubusercontent.com/austinthaldorfhuelsbeck/portfolio-with-react/develop/img/huelsbeck-headshot.jpg"
  const photoTitle = "Photo by: Henry Tieu Photography"

  const caption = (
    <div className="about-caption">
      <p data-aos="fade-up">
        I live up among the pines in beautiful Seattle, WA. During the day, I
        create content for the web as a part of a marketing team for a
        non-profit. In the evenings, I'm studying web development as a part of{" "}
        <a href="https://www.thinkful.com" target="_blank">
          Thinkful
        </a>
        's Full Stack Engineering program.
      </p>

      <p data-aos="fade-up">
        Building, creating, and fine-tuning is where I feel at home. Whether
        it's solving a design challenge, or editing a feature film, I've always
        gravitated towards the problem-solving side of creative fields. Learning
        to code has brought that problem-solving, engineering-mindedness into
        full focus.
      </p>

      <p data-aos="fade-up">
        My training in digital marketing &amp; filmmaking inform the design
        side&mdash;Who is this for? How will they experience it? How will they{" "}
        <em>find</em> it?&mdash;while my passion for math, logic &amp;
        engineering informs the coding side.
      </p>

      <p data-aos="fade-up">
        While building websites and interactive apps alone has been rewarding,
        my goal is to be able to create within a team development setting as
        soon as possible. My experience has taught me that collaboration is the
        key to creating amazing results and sharpening your own skills. I never
        like to be the smartest person in the room. I am always looking for the
        next opportunity to learn, and being around great programmers is the
        best way to make that happen.
      </p>

      <p data-aos="fade-up">
        Learning tools like React, Node.js, &amp; Postgres, I have been able to
        design &amp; build fully-functional webapps from conception to delivery.
        However, I am always striving to deepen my level of knowledge even with
        technologies which I have already "learned".
      </p>
    </div>
  )

  // Build the section and return
  return (
    <>
      <section id="about" data-nav="about">
        <CategoryHeader title="about" />
        <div>
          <div id="portfolio-intro" data-aos="flip-left">
            <div id="header-photo">
              <img
                src={url}
                alt={photoTitle}
                title={photoTitle}
                className="circle-img"
              />
            </div>

            <div className="header-intro">
              <p>Welcome to my portfolio!</p>
              <p>
                I'm Austin. I'm a web developer with a background in video and
                design.
              </p>
            </div>
          </div>
          {caption}
        </div>
      </section>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </>
  )
}
