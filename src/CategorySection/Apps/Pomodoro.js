import React from "react";

export default function Pomodoro() {
  return (
    <main>
      <div class="project-content">
        <h3 className="justify" data-aos="fade-up">
          <a
            href="https://pomodoro-react-app-huelsbeck-db668fb2m-austinthaldorfhuelsbeck.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            Visit Site &rarr;
          </a>
        </h3>
      </div>

      <div id="screenshot" className="flex-container" data-aos="fade-up">
        <img
          src="https://storage.googleapis.com/ath-portfolio-images/pomodoro-screenshot.jpg"
          alt="Pomodoro Timer"
          title="Pomodoro"
          className="inset-image"
        />
      </div>
    </main>
  );
}
