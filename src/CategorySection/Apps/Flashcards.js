import React from "react";

export default function Flashcards() {
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
            src="https://storage.googleapis.com/ath-portfolio-images/flashcard-o-matic-screenshot.jpg"
            alt="Flashcard-O-Matic"
            title="Flashcards"
            className="inset-image"
          />
        </div>

        <section className="category-section" id="project-content">
          <p data-aos="fade-up">
            This project challenges abstract thinking by requiring a complex
            routing system. I enjoyed creating this app in an almost
            stream-of-consciousness first draft. From there, I refactored the
            code rather significantly until the structure was DRY, reused many
            components, and required few props and imports.
          </p>
          <p data-aos="fade-up">
            One key challenge in building this app was designing the NavBar. I
            opted for a single component that accepts props in accordance with
            the pages that need to appear in the NavBar. It saved a lot of code,
            is easy to maintain, and explains itself.
          </p>
          <p data-aos="fade-up">
            One further challenge for myself for this project was to refactor
            code and set intentionality with variable names and overall
            direction. This allowed for use of less comments overall and more
            self-explanatory components.
          </p>
          <p data-aos="fade-up">
            The database and backend were created for us, but I had the
            opportunity to handle object-based data in a way that is useful for
            the user.
          </p>

          <h3 className="justify" data-aos="fade-up">
            <a
              href="https://github.com/austinthaldorfhuelsbeck/flashcard-o-matic"
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
