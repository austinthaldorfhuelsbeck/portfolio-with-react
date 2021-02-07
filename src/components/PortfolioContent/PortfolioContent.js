import React from "react";
import CategorySection from "./CategorySection";
import ImageAndCaption from "./ImageAndCaption";
import ContactForm from "../ContactForm/ContactForm";

function PortfolioContent({ data }) {
  const caption = (
    <div className="about-caption">
      <p>
        I live up among the pines in beautiful Seattle, WA. During the day, I
        create content for the web as a part of a marketing team for a
        non-profit. In the evenings, I'm studying web development as a part of{" "}
        <a href="https://www.thinkful.com" target="_blank">
          Thinkful
        </a>
        's Full Stack Engineering program.
      </p>

      <p>
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

      <p>
        While building websites and interactive apps alone has been rewarding,
        my goal is to be able to create within a team development setting as
        soon as possible. My experience has taught me that collaboration is the
        key to creating amazing results and sharpening your own skills. I never
        like to be the smartest person in the room&mdash;I am always looking for
        the next opportunity to learn, and being around great programmers is the
        best way to make that happen.
      </p>

      <p>
        Learning HTML, CSS, and JavaScript has already allowed me to design a
        handful of basic websites. I aim to design more apps to live on the web
        as I continue my education. With tools like React, Node &amp; Express, I
        plan to design &amp; build fully-functional webapps from conception to
        delivery.
      </p>
    </div>
  );

  return (
    <main className="container">
      <CategorySection
        title="Sites"
        subtitle="Sites that I've designed that now reside on the Internet."
        data={data}
      />

      <CategorySection
        title="Apps"
        subtitle="Apps that I've designed, on the Internet or otherwise."
        data={data}
      />

      <ImageAndCaption title="About" caption={caption} data={data} />

      <ContactForm title="Contact" />
    </main>
  );
}

export default PortfolioContent;
