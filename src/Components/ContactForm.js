import React from "react";
import CategoryHeader from "./CategorySection/CategoryHeader/CategoryHeader";

function ContactForm({ title }) {
  return (
    <article id="contact" data-nav="contact">
      <CategoryHeader title={title} />

      <div className="form-container" data-aos="fade-up">
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
  );
}

export default ContactForm;
