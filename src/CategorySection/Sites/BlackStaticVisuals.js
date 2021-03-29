import React from "react";

export default function BlackStaticVisuals({ item }) {
  return (
    <main>
      <div className="project-content">
        <h3 className="justify" data-aos="fade-up">
          <div className="warning">
            <strong>*WARNING: Flashing lights*</strong>
          </div>
          <a
            href="https://blackstaticvisuals.austinhuelsbeck.repl.co/"
            rel="noreferrer"
            target="_blank"
          >
            Visit Site &rarr;
          </a>
        </h3>

        <div id="screenshot" class="flex-container" data-aos="fade-up">
          <img
            src="https://storage.googleapis.com/ath-portfolio-images/bsv-screenshot.jpg"
            alt="Black Static Visuals"
            title="Black Static Visuals"
            class="inset-image"
          />
        </div>

        <section className="category-section" id="project-content">
          <p data-aos="fade-up">
            This is the first full website I built using <strong>HTML</strong>{" "}
            &amp; <strong>CSS</strong>. When I shot freelance music videos, I
            created a simple portfolio site to display my work. I wanted to
            challenge myself to recreate it faithfully.
          </p>
          <p data-aos="fade-up">
            This project uses <strong>Flexbox</strong>,{" "}
            <strong>HTML forms</strong>, and a mobile-first responsive layout.
            It was important to make sure elements resize in a natural way and
            for the content to be as legible as possible.
          </p>
          <p data-aos="fade-up">
            The primary user of this website doesn't want to spend a lot of time
            there&ndash; I wanted the experience to very quickly and naturally
            lead from samples to contact without much in the way.
          </p>

          <h3 className="justify" data-aos="fade-up">
            <a
              href="https://github.com/austinthaldorfhuelsbeck/BlackStaticVisuals"
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
