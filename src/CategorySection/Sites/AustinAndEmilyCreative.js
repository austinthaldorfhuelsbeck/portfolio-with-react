import React from "react";

export default function AustinAndEmilyCreative({ item }) {
  return (
    <main>
      <div class="project-content">
        <h3 className="justify" data-aos="fade-up">
          <a
            href="https://blissful-payne-d84d08.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Visit Site &rarr;
          </a>
        </h3>

        <div id="screenshot" className="flex-container" data-aos="fade-up">
          <img
            src="https://storage.googleapis.com/ath-portfolio-images/aec-screenshot.jpg"
            alt="Austin + Emily"
            title="Austin + Emily"
            className="inset-image"
          />
        </div>

        <section className="category-section" id="project-content">
          <p data-aos="fade-up">
            My wife and I own a small business shooting wedding videos, and our
            website needed improvements, so it seemed like a natural place to
            start. This project was an excellent way to practice honing my
            skills with <strong>HTML</strong> and <strong>CSS</strong>, using
            Bootstrap.
          </p>
          <p data-aos="fade-up">
            Ultimately, the <u>purpose</u> of the site is to display our
            portfolio of work, provide some information, and direct the user to
            get in touch. The <em>opportunity</em>, however, was to deliver a
            unique experience that showcases our personality and style.
          </p>
          <p data-aos="fade-up">
            This project required embedded video players, a contact form, and
            some simple animations. It is hosted using <strong>Netlify</strong>.
            Above all, the goal for this project was to create an elegent,
            inviting experience for the intended user&ndash; so we can start
            building out new functionality soon.
          </p>
          <p data-aos="fade-up">
            Over half of the traffic to our site is mobile, so it was important
            to develop this project mobile-first. The layout is fully
            responsive, to provide a more immersive experience for desktop
            viewers, while remaining fast and clean on any device.
          </p>

          <h3 className="justify" data-aos="fade-up">
            <a
              href="https://github.com/austinthaldorfhuelsbeck/AustinAndEmilyCreative"
              rel="noreferrer"
              target="_blank"
            >
              Github Repo &rarr;
            </a>
          </h3>
        </section>
      </div>
    </main>
  );
}
