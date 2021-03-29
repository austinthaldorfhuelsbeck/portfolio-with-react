import React from "react";

export default function Grubdash() {
  return (
    <main>
      <div class="project-content">
        <h3 className="justify" data-aos="fade-up">
          <a
            href="https://flashcard-o-matic-ath.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            Visit Site &rarr;
          </a>
        </h3>

        <div id="screenshot" className="flex-container" data-aos="fade-up">
          <img
            src="https://storage.googleapis.com/ath-portfolio-images/grubdash-dashboard-screenshot.jpg"
            alt="Grubdash"
            title="Grubdash"
            className="inset-image"
          />
        </div>

        <section className="category-section" id="project-content">
          <p data-aos="fade-up">
            This project provided the opportunity to think through REST
            structure and translate that into JavaScript using powerful backend
            libraries.
          </p>
          <p data-aos="fade-up">
            One key challenge of this project was its test-driven nature. The
            server structure was straightforward and laid out well, and I found
            myself with a rough draft quickly. Revising the solution until all
            tests passed proved much more difficult. Another challenge unique to
            this project is the amount of file structure organization and
            command-line actions required. Compared to a React app, I found
            myself typing less code but pausing to think more often.
          </p>
          <p data-aos="fade-up">
            At this point in the cirriculum, I have not learned as much about
            creating modular, DRY code as I will learn. However, I challenged
            myself to make this project as concise and modular as possible with
            the tools I had. I also made an effort not to repeat myself where
            possible.
          </p>

          <h3 className="justify" data-aos="fade-up">
            <a
              href="https://github.com/austinthaldorfhuelsbeck/grubdash"
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
