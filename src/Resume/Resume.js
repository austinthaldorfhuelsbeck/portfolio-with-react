import React from "react"
import CategoryHeader from "../CategorySection/CategoryHeader"
import "./resume.css"

export default function Resume() {
  return (
    <div className="project-content" id="resume">
      <CategoryHeader title="Resume" id="header" />

      <a
        href="https://docs.google.com/document/d/1NZ-gK5kMpuWhI7MbvdipvCW1ibbyXGya7JgyOwxJ7Y4/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        View in Google Docs &rarr;
      </a>

      <section className="resume-section">
        <div className="row row-pad">
          <p data-aos="fade-up">
            Full-stack web developer who is proficient in HTML, CSS, and
            JavaScript with React.js and Node.js. My approach to development is
            informed by over ten years of experience in audio engineering and
            cinematography. Digital marketing specialist with startup experience
            and an interest in web design, digital media, and accessibility.
          </p>
        </div>

        <div className="row">
          <h1 data-aos="fade-up">Skills</h1>
        </div>
        <div className="row row-pad">
          <div className="col" data-aos="fade-up">
            <ul>
              <li>Web Development</li>
              <li>JavaScript ES6</li>
              <li>HTML5 &amp; CSS3</li>
              <li>Git &amp; GitHub</li>
              <li>AWS &amp; GCP</li>
              <li>REST API</li>
            </ul>
          </div>
          <div className="col" data-aos="fade-up">
            <ul>
              <li>SQL</li>
              <li>Postgres</li>
              <li>VSCode</li>
              <li>Continuous Deployment</li>
              <li>Unit Testing</li>
              <li>Data Structures &amp; Algorithms</li>
            </ul>
          </div>
          <div className="col" data-aos="fade-up">
            <ul>
              <li>Filmmaking</li>
              <li>Podcasting</li>
              <li>Sound Design</li>
              <li>Webflow</li>
              <li>Adobe CC</li>
              <li>Google Analytics</li>
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
                <h2>Multimedia Specialist</h2>
              </a>
              <h3>The Seattle School of Theology &amp; Psychology</h3>
              <p>
                Grew a library of commercial and donor-forward videos from a
                handful to 100+
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
                <h2>Creative Director</h2>
              </a>
              <h3>Zero To Sixty by AGD Entertainment</h3>
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
            <div className="row row-pad" data-aos="fade-up">
              <a
                title="Worship Online"
                href="https://worshiponline.com"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Video Editor</h2>
              </a>
              <h3>Worship Online</h3>
              <p>
                Launched a new business idea by developing core operations as
                one of the first employees at a startup
              </p>
              <p>
                Led the team in designing and implementing a system to produce
                original visual content for the product, marketing videos,
                social media content, and a weekly podcast
              </p>
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
              Express and Knex, and PostgreSQL
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
        <p className="tiny-text">Updated Sept 1, 2021</p>
        <br />
      </section>
    </div>
  )
}
