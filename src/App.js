import React from "react";
import "./App.css";

function App() {
  return (
    <div id="container">
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

      <main>
        <div className="container">
          <section className="category-section" id="sites" data-nav="sites">
            <header className="category-header">
              <h1 className="category-title">Sites</h1>
              <hr />
              <p>Sites that I've designed that now reside on the Internet.</p>
            </header>

            <ul className="category-thumbnails flex-container">
              <li>
                <a
                  title="Austin + Emily Creative"
                  href="/AustinThaldorfHuelsbeck-projects/austinandemily.html"
                >
                  <img
                    className="darkened circle-img md-img"
                    alt="Austin + Emily Creative"
                    src="../img/austin-emily.jpg"
                  />
                  <p className="over-img">Austin + Emily Creative</p>
                </a>
              </li>

              <li>
                <a
                  title="Black Static Visuals"
                  href="/AustinThaldorfHuelsbeck-projects/blackstaticvisuals.html"
                >
                  <img
                    alt="Black Static Visuals"
                    className="darkened circle-img md-img"
                    src="../img/black-static.jpg"
                  />
                  <p className="over-img">Black Static Visuals</p>
                </a>
              </li>

              <li>
                <a
                  title="Rain City Realtor"
                  href="/AustinThaldorfHuelsbeck-projects/raincity.html"
                >
                  <img
                    alt="Rain City Realtor"
                    className="darkened circle-img md-img"
                    src="../img/space-needle.jpg"
                  />
                  <p className="over-img">Rain City Realtor</p>
                </a>
              </li>
            </ul>
          </section>

          <section className="category-section" id="apps" data-nav="apps">
            <header className="category-header">
              <h1 className="category-title">Apps</h1>
              <hr />
              <p>Apps that I've designed, on the Internet or otherwise.</p>
            </header>

            <ul className="category-thumbnails flex-container">
              <li>
                <a
                  title="Placeholder"
                  href="/AustinThaldorfHuelsbeck-projects/"
                >
                  <img
                    alt="Placeholder"
                    className="darkened circle-img md-img"
                    src="../img/placeholder.jpg"
                  />
                  <p className="over-img">Placeholder 1</p>
                </a>
              </li>

              <li>
                <a
                  title="Placeholder"
                  href="/AustinThaldorfHuelsbeck-projects/"
                >
                  <img
                    alt="Placeholder"
                    className="darkened circle-img md-img"
                    src="../img/placeholder.jpg"
                  />
                  <p className="over-img">Placeholder 2</p>
                </a>
              </li>

              <li>
                <a
                  title="Placeholder"
                  href="/AustinThaldorfHuelsbeck-projects/"
                >
                  <img
                    alt="Placeholder"
                    className="darkened circle-img md-img"
                    src="../img/placeholder.jpg"
                  />
                  <p className="over-img">Placeholder 3</p>
                </a>
              </li>
            </ul>
          </section>

          <article id="about" data-nav="about">
            <header className="category-header">
              <h1 className="category-title">About</h1>
            </header>
            <hr />
            <div id="headshot" className="flex-container">
              <img
                src="../img/Emily-Austin-Elopement-94.jpg"
                alt="Austin Thaldorf-Huelsbeck"
                title="Photo by: Henry Tieu Photography"
                className="inset-image"
              />
            </div>

            <p>
              I live up among the pines in beautiful Seattle, WA. During the
              day, I create content for the web as a part of a marketing team
              for a non-profit. In the evenings, I'm studying web development as
              a part of{" "}
              <a href="https://www.thinkful.com" target="_blank">
                Thinkful
              </a>
              's Full Stack Engineering program.
            </p>

            <p>
              Building, creating, and fine-tuning is where I feel at home.
              Whether it's solving a design challenge, or editing a feature
              film, I've always gravitated towards the problem-solving side of
              creative fields. Learning to code has brought that
              problem-solving, engineering-mindedness into full focus. My
              training in digital marketing &amp; filmmaking inform the design
              side&mdash;Who is this for? How will they experience it? How will
              they <em>find</em> it?&mdash;while my passion for math, logic
              &amp; engineering informs the coding side. (Those Calculus credits{" "}
              <strong>did</strong> come in handy after all!)
            </p>

            <p>
              While building websites and interactive apps alone has been
              rewarding, my goal is to be able to create within a team
              development setting as soon as possible. My experience has taught
              me that collaboration is the key to creating amazing results and
              sharpening your own skills. I never like to be the smartest person
              in the room&mdash;I am always looking for the next opportunity to
              learn, and being around great programmers is the best way to make
              that happen.
            </p>

            <p>
              Learning HTML, CSS, and JavaScript has already allowed me to
              design a handful of basic websites. I aim to design more apps to
              live on the web as I continue my education. With tools like React,
              Node &amp; Express, I plan to design &amp; build fully-functional
              webapps from conception to delivery.
            </p>
          </article>

          <article id="contact" data-nav="contact">
            <header className="category-header">
              <h1 className="category-title">Contact</h1>
            </header>
            <hr />

            <div className="form-container">
              <form action="https://formspree.io/f/xaylvnkn" method="POST">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" required />
                <br />

                <label for="email">Email</label>
                <input id="email" type="text" name="email" required />
                <br />

                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  maxlength="350"
                  required
                ></textarea>
                <br />

                <div className="flex-container">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </article>
        </div>
      </main>

      <footer id="site-footer">
        <div className="container">
          <ul className="links flex-icons">
            <li>
              <a
                href="https://github.com/austinthaldorfhuelsbeck"
                title="Austin on GitHub"
                target="_blank"
              >
                <i className="fa fa-github-alt"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/blackmetallotus"
                title="Austin on Twitter"
                target="_blank"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/austin.huelsbeck"
                title="Austin on Facebook"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/austinhuelsbeck"
                title="Austin on LinkedIn"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>

          <div className="email-info flex-container">
            <a href="mailto:austinthaldorfhuelsbeck@gmail.com">
              <u>austinthaldorfhuelsbeck@gmail.com</u>
            </a>
          </div>

          <div className="copyright-info flex-container">
            <p>&copy; 2021 Austin Thaldorf-Huelsbeck</p>
          </div>

          <form className="inline" action="./#site-nav" method="get">
            <button className="to-top">
              <i className="fa fa-arrow-up"></i>
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
