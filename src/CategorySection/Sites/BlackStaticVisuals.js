import React from "react";

export default function BlackStaticVisuals() {
  return (
    <main>
      <a
        href="https://blackstaticvisuals.austinhuelsbeck.repl.co/"
        target="_blank"
      >
        <div id="screenshot" class="flex-container" data-aos="fade-up">
          <img
            src="img/bsv-screenshot.jpg"
            alt="Black Static Visuals"
            title="Black Static Visuals"
            class="inset-image"
          />
        </div>
      </a>
      <div class="project-content">
        <section class="category-section" id="project-content">
          <p data-aos="fade-up">
            This is the first full website I built using <strong>HTML</strong>{" "}
            &amp;
            <strong>CSS</strong>. When I shot freelance music videos, I created
            a simple portfolio site to display my work. I wanted to challenge
            myself to recreate it faithfully.
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
          <br />
          <hr />
          <p className="warning" data-aos="fade-up">
            <strong>*WARNING: Flashing lights*</strong>
          </p>
          <p data-aos="fade-up">
            <a
              href="https://blackstaticvisuals.austinhuelsbeck.repl.co/"
              target="_blank"
            >
              <u>
                <strong>
                  The finished site is hosted on <em>Repl.it</em>.
                </strong>
              </u>
            </a>
          </p>
          <p data-aos="fade-up">
            <a
              href="https://github.com/austinthaldorfhuelsbeck/BlackStaticVisuals"
              target="_blank"
            >
              <u>
                <strong>
                  The finished <em>GitHub</em> repository is here.
                </strong>
              </u>
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
