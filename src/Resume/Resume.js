import React from "react";
import CategoryHeader from "../CategorySection/CategoryHeader";
import "./resume.css";

export default function Resume({ scrollToTop }) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="project-content">
      <CategoryHeader title="Resume" id="header" />

      <section className="resume-section">
        <div className="row row-pad">
          <h1 data-aos="fade-up">Employment</h1>
        </div>
        <div className="row">
          <div className="col" data-aos="fade-up">
            <div className="row" data-aos="fade-up">
              <p>
                2018&ndash;<em>present</em>
              </p>
            </div>
            <div className="row row-pad" data-aos="fade-up">
              <a
                title="The Seattle School"
                href="/AustinThaldorfHuelsbeck-projects/theseattleschool.html"
              >
                <h2>The Seattle School of Theology &amp; Psychology</h2>
              </a>
              <h3>Multimedia Specialist</h3>
              <p>Digital Marketing | Video Editing | Podcast Editing</p>
            </div>
            <div className="row" data-aos="fade-up">
              <p>2018&ndash;2019</p>
            </div>
            <div className="row row-pad" data-aos="fade-up">
              <a
                title="Zero To Sixty"
                href="https://agdentertainment.com/about-zero-to-60"
                target="_blank"
              >
                <h2>Zero To Sixty by AGD Entertainment</h2>
              </a>
              <h3>Creative Director</h3>
              <p>Videographer | Video Editing | Animation | Graphic Design</p>
              <p>
                <a
                  title="AGD Reel"
                  href="https://vimeo.com/294708444"
                  target="_blank"
                >
                  <strong>View Reel &rarr;</strong>
                </a>
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
                title="The Seattle School"
                href="/AustinThaldorfHuelsbeck-projects/theseattleschool.html"
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
                title="The Seattle School"
                href="/AustinThaldorfHuelsbeck-projects/theseattleschool.html"
              >
                <h2>Worship Online</h2>
              </a>
            </div>
            <div className="row row-pad" data-aos="fade-up">
              <h3>Digital Marketing</h3>
              <p>
                Videographer | Video Editing | Podcast Editing | Marketing
                Campaigns &amp; Strategy
              </p>
              <p>
                <a
                  title="Worship Online"
                  href="http://worshiponline.com"
                  target="_blank"
                >
                  <strong>View Website &rarr;</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section" id="skills">
        <div className="row row-pad">
          <h1 data-aos="fade-up">Skills</h1>
        </div>
        <div className="row row-pad" data-aos="fade-up">
          <h2>Development</h2>
        </div>
        <div className="col row-pad">
          <p data-aos="fade-up">
            I am currently enrolled in{" "}
            <a
              href="https://www.thinkful.com/bootcamp/web-development/flexible/"
              target="_blank"
            >
              <strong>Thinkful</strong>
            </a>
            's Flex Engineering program, where I am learning to program websites
            like the one you are reading with <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, and <strong>JavaScript</strong> with{" "}
            <strong>React</strong>. These technologies form the base of my daily
            approach to front-end development.
          </p>
          <br />
          <p data-aos="fade-up">
            For server-side development, I am learning the{" "}
            <strong>Node.js</strong> framework with <strong>Express</strong>. I
            am passionate about both client-side and server-side development,
            and it is important to me to be well-versed in both.
          </p>
          <br />
          <p data-aos="fade-up">
            I use <strong>Git</strong> &amp; <strong>GitHub</strong> to manage
            revisions for all of my projects. Check out my{" "}
            <a
              href="https://github.com/austinthaldorfhuelsbeck"
              target="_blank"
            >
              <strong>GitHub page</strong>
            </a>{" "}
            to see my most recent projects and contributions.
          </p>
          <p data-aos="fade-up">
            My preferred code editor is <strong>VSCode</strong>. I am quite
            comfortable working in both <strong>Windows</strong> and{" "}
            <strong>OS X</strong>, with basic knowledge of{" "}
            <strong>Linux</strong>.
          </p>
        </div>
        <div className="row row-pad">
          <h1 data-aos="fade-up">Video &amp; Design</h1>
        </div>
        <div className="col row-pad">
          <p data-aos="fade-up">
            I have been shooting and editing video professionally for over six
            years. From freelance, to startups, to an established institution, I
            have been able to work with a wide variety of clients and deliver
            results on-time.
          </p>
          <br />
          <p data-aos="fade-up">
            Beyond communication and professionalism, this experience has also
            allowed me to develop strong skills with{" "}
            <strong>Adobe Creative Cloud</strong>, including Photoshop, Premiere
            Pro, Illustrator, Lightroom, and more.
          </p>
          <br />
          <p data-aos="fade-up">
            I have also gained real-world experience designing graphics and
            video for the web, managing content using tools like{" "}
            <strong>Libsyn</strong> &amp; <strong>Wordpress</strong>. I have
            been able to lead and contribute to digital marketing campaigns,
            drawing data-driven conclusions alongside a Marketing team.
          </p>
        </div>
      </section>

      <section className="resume-section" id="education">
        <div className="row row-pad">
          <h1 data-aos="fade-up">Education</h1>
        </div>
        <div className="row">
          <div className="col" data-aos="fade-up">
            <p>
              Nov 2019&ndash;<em>present</em>
            </p>
            <h2>
              <a
                href="https://www.thinkful.com/bootcamp/web-development/flexible/"
                target="_blank"
              >
                Thinkful
              </a>
            </h2>
            <h3>Engineering Flex</h3>
          </div>
          <div className="col" data-aos="fade-up">
            <p>2009&ndash;2013</p>
            <h2>
              <a href="https://www.georgefox.edu/" target="_blank">
                George Fox University
              </a>
            </h2>
            <h3>BA in Cinema Media Communications</h3>
            <p>Audio Engineering concentration</p>
            <p>Excellence in Sound Design Award: BEA Las Vegas '14</p>
          </div>
        </div>
      </section>

      <section className="resume-section" id="signature" data-aos="fade-up">
        <p>
          <a
            href="https://www.linkedin.com/in/austinhuelsbeck"
            title="LinkedIn Profile &amp; Resume"
            target="_blank"
          >
            <strong>Connect &amp; view more details on LinkedIn &rarr;</strong>
          </a>
        </p>
        <br />
        <p className="tiny-text">Updated Mar 4, 2021</p>
        <br />
        <div className="container">
          <i className="fas fa-arrow-circle-up fa-4x" onClick={scrollToTop}></i>
        </div>
      </section>
    </div>
  );
}
