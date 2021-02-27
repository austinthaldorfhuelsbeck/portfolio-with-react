import React from "react";
import CategoryHeader from "../CategorySection/CategoryHeader";

export default function About({ title, data }) {
  // Find the page data
  const imgSrc = data.imageUrl;
  const imgTitle = data.imageTitle;

  const caption = () => (
    <div className="about-caption">
      <p data-aos="fade-up">
        I live up among the pines in beautiful Seattle, WA. During the day, I
        create content for the web as a part of a marketing team for a
        non-profit. In the evenings, I'm studying web development as a part of{" "}
        <a href="https://www.thinkful.com" target="_blank">
          Thinkful
        </a>
        's Full Stack Engineering program.
      </p>

      <p data-aos="fade-up">
        Building, creating, and fine-tuning is where I feel at home. Whether
        it's solving a design challenge, or editing a feature film, I've always
        gravitated towards the problem-solving side of creative fields. Learning
        to code has brought that problem-solving, engineering-mindedness into
        full focus. My training in digital marketing &amp; filmmaking inform the
        design side&mdash;Who is this for? How will they experience it? How will
        they <em>find</em> it?&mdash;while my passion for math, logic &amp;
        engineering informs the coding side. (Those Calculus credits{" "}
        <strong>did</strong> come in handy after all!)
      </p>

      <p data-aos="fade-up">
        While building websites and interactive apps alone has been rewarding,
        my goal is to be able to create within a team development setting as
        soon as possible. My experience has taught me that collaboration is the
        key to creating amazing results and sharpening your own skills. I never
        like to be the smartest person in the room&mdash;I am always looking for
        the next opportunity to learn, and being around great programmers is the
        best way to make that happen.
      </p>

      <p data-aos="fade-up">
        Learning HTML, CSS, and JavaScript has already allowed me to design a
        handful of basic websites. I aim to design more apps to live on the web
        as I continue my education. With tools like React, Node &amp; Express, I
        plan to design &amp; build fully-functional webapps from conception to
        delivery.
      </p>
    </div>
  );

  // Build the section and return
  return (
    <section id={title.toLowerCase()} data-nav={title.toLowerCase()}>
      <CategoryHeader title={title} />
      <div>
        <div className="flex-container" data-aos="fade-up">
          <img
            src={imgSrc}
            alt={title}
            title={imgTitle}
            className="inset-image"
          />
        </div>
        {caption()}
      </div>
    </section>
  );
}
