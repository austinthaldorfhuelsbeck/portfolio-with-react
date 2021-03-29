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

        <div id="screenshot" className="flex-container" data-aos="fade-up">
          <img
            src="https://storage.googleapis.com/ath-portfolio-images/pomodoro-timer-screenshot.jpg"
            alt="Pomodoro Timer"
            title="Pomodoro"
            className="inset-image"
          />
        </div>

        <section className="category-section" id="project-content">
          <p data-aos="fade-up">
            This project was a fantastic opportunity to develop a useful React
            app. The Thinkful team provides its students with a basic JSX
            framework utilizing Bootstrap and no styling or functionality. From
            there, I tried to find ways to break the structure into components
            sensibly, reusing components when able. "Thinking in React" is a key
            takeaway from my experience creating this app.
          </p>
          <p data-aos="fade-up">
            One key challenge in building this app was passing props
            successfully through the structure of the app. There are a lot of
            props required because of the way the app is structured, so I
            defined props as objects before building the JSX. This allowed me to
            use the spread operator when writing the return() statement in the
            Pomodoro parent component. The Timer component combines two
            elements, and each sub-element requires a prop that has a
            conditional value depending on state. For this reason, the variable
            had to be defined in the Timer component and then passed to its
            children along with the props passed into Timer. My solution for
            this problem utilizes object destructuring and spread operators.
          </p>
          <p data-aos="fade-up">
            The default Bootstrap styling provided left room for improvement. I
            began by editing the JSX itself to improve the Bootstrap class
            names. I increased the responsive capability of the app by center
            aligning and separating some of the content, setting a variable
            header font size, and giving the parent container element a
            min-width to keep components from spilling off. In general, I
            improved the look and feel of the app using custom CSS.
          </p>
          <p data-aos="fade-up">
            Building my first fully-functional React app allowed me an
            opportunity to try out Heroku for sharing with friends and family.
          </p>

          <h3 className="justify" data-aos="fade-up">
            <a
              href="https://github.com/austinthaldorfhuelsbeck/pomodoro-react-app-huelsbeck"
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
