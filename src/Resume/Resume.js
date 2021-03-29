import React from "react";
import CategoryHeader from "../CategorySection/CategoryHeader";
import "./resume.css";

export default function Resume() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="project-content" id="resume">
      <CategoryHeader title="Resume" id="header" />

      <section className="resume-section">
        <div className="row row-pad">
          <p data-aos="fade-up">
            Full-stack web developer who is proficient in HTML, CSS, SQL, and
            JavaScript with React and Node.js. My approach to development is
            informed by over ten years of experience in audio engineering and
            cinematography. Digital marketing specialist with startup experience
            and an interest in design.
          </p>
        </div>

        <div className="row">
          <h1 data-aos="fade-up">Skills</h1>
        </div>
        <div className="row row-pad">
          <div className="col" data-aos="fade-up">
            <ul>
              <li>Digital Marketing</li>
              <li>Adobe CC</li>
              <li>Wordpress</li>
              <li>AWS &amp; GCP</li>
            </ul>
          </div>
          <div className="col" data-aos="fade-up">
            <ul>
              <li>Filmmaking</li>
              <li>Podcasting</li>
              <li>Sound Design</li>
              <li>Music Production</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <h1 data-aos="fade-up">Experience</h1>
        </div>
        <div className="row">
          <div className="col" data-aos="fade-up">
            <div className="row" data-aos="fade-up">
              <p>
                2018&ndash;<em>present</em>
              </p>
            </div>
            <div className="row row-pad" data-aos="fade-up">
              <a title="The Seattle School" href="http://theseattleschool.edu">
                <h2>The Seattle School of Theology &amp; Psychology</h2>
              </a>
              <h3>Multimedia Specialist</h3>
              <p>
                Conceptualized, filmed, and edited dozens of original commercial
                and donor-forward videos representing the institution’s brand
              </p>
              <p>
                Recorded, edited, and distributed 100+ episodes of a weekly
                podcast; grew from 50,000 to &gt; 3 million downloads
              </p>
              <p>
                Led a major social media initiative to get the company on
                Instagram and YouTube
              </p>
            </div>
            <div className="row" data-aos="fade-up">
              <p>2018&ndash;2019</p>
            </div>
            <div className="row row-pad" data-aos="fade-up">
              <a
                title="Zero To Sixty"
                href="https://vimeo.com/294708444"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Zero To Sixty by AGD Entertainment</h2>
              </a>
              <h3>Creative Director</h3>
              <p>
                Launched over twenty new artists’ debut albums by creating
                original album art, promo photos, music videos, and animations
              </p>
              <p>
                Developed portfolio websites for artists using tools like
                Squarespace and Wordpress
              </p>
            </div>
          </div>
          <div className="col" data-aos="fade-up">
            <div className="row" data-aos="fade-up">
              <p>
                2018&ndash;<em>present</em>
              </p>
            </div>
            <div className="row row-pad" data-aos="fade-up">
              <a
                title="Austin + Emily"
                href="https://austinandemilycreative.com"
              >
                <h2>Austin + Emily Creative</h2>
              </a>
              <h3>Wedding Videography</h3>
              <p>Business Owner | Videographer | Video Editing</p>
              <p>
                <a
                  title="Austin + Emily Creative"
                  href="https://austinandemilycreative.com/films"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>View Samples &rarr;</strong>
                </a>
              </p>
            </div>
            <div className="row" data-aos="fade-up">
              <p>2016&ndash;2018</p>
            </div>
            <div className="row" data-aos="fade-up">
              <a
                title="Worship Online"
                href="http://worshiponline.com"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Worship Online</h2>
              </a>
            </div>
            <div className="row row-pad" data-aos="fade-up">
              <h3>Digital Marketing</h3>
              <p>
                Developed core operations of a brand new startup to help grow it
                from two employees to over forty
              </p>
              <p>Launched social media channels now with 50,000+ followers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section" id="education">
        <div className="row row-pad">
          <h1 data-aos="fade-up">Education</h1>
        </div>
        <div className="row">
          <div className="col" data-aos="fade-up">
            <p>2020&ndash;2021</p>
            <h2>
              <a
                href="https://www.thinkful.com/bootcamp/web-development/flexible/"
                target="_blank"
                rel="noreferrer"
              >
                Thinkful
              </a>
            </h2>
            <h3>Certificate, Software Engineering</h3>
            <p>
              Full-stack software engineering of real-world apps with
              interactive front-ends and REST database structure
            </p>
            <p>
              Practical mastery of HTML, CSS, JavaScript, React, Node.js with
              Express, and PostgreSQL
            </p>
            <br />
            <p>2006&ndash;2009</p>
            <h2>
              <a
                href="https://www.firstinspires.org/robotics/frc"
                target="_blank"
                rel="noreferrer"
              >
                FIRST Robotics
              </a>
            </h2>
            <h3>
              <a
                href="https://www.wilsonvillerobotics.com/"
                target="_blank"
                rel="noreferrer"
              >
                Team 1425
              </a>
            </h3>
            <p>
              Programmed robots and created animations with a team of fellow
              high schoolers
            </p>
            <p>Invited to compete in worldwide events across the country</p>
          </div>
          <div className="col" data-aos="fade-up">
            <p>2009&ndash;2013</p>
            <h2>
              <a
                href="https://www.georgefox.edu/"
                target="_blank"
                rel="noreferrer"
              >
                George Fox University
              </a>
            </h2>
            <h3>BA in Cinema &amp; Media Communications</h3>
            <p>Audio Engineering concentration</p>
            <p>
              Excellence in Sound Design Award:{" "}
              <a
                href="https://www.beaweb.org/conv/"
                target="_blank"
                rel="noreferrer"
              >
                BEA Las Vegas
              </a>{" "}
              '14
            </p>
            <p>
              Attended{" "}
              <a
                href="https://www.cmcnashville.com/"
                target="_blank"
                rel="noreferrer"
              >
                Contemporary Music Center
              </a>
              , a semester-long intensive remote study
            </p>
          </div>
        </div>
      </section>

      <section className="resume-section" id="signature" data-aos="fade-up">
        <p>
          <a
            href="https://www.linkedin.com/in/austinhuelsbeck"
            title="LinkedIn Profile &amp; Resume"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Connect &amp; view more details on LinkedIn &rarr;</strong>
          </a>
        </p>
        <br />
        <p className="tiny-text">Updated Mar 28, 2021</p>
        <br />
        <div className="container">
          <i className="fas fa-arrow-circle-up fa-4x" onClick={scrollToTop}></i>
        </div>
      </section>
    </div>
  );
}
