import React from "react";

function SiteFooter() {
  return (
    <footer id="site-footer">
      <div className="container">
        <ul className="links flex-icons">
          <li>
            <a
              href="https://github.com/austinthaldorfhuelsbeck"
              title="Austin on GitHub"
              target="_blank"
            >
              <i className="fa fa-github-alt"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/blackmetallotus"
              title="Austin on Twitter"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/austin.huelsbeck"
              title="Austin on Facebook"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/austinhuelsbeck"
              title="Austin on LinkedIn"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>

        <div className="email-info flex-container">
          <a href="mailto:austinthaldorfhuelsbeck@gmail.com">
            <u>austinthaldorfhuelsbeck@gmail.com</u>
          </a>
        </div>

        <div className="copyright-info flex-container">
          <p>&copy; 2021 Austin Thaldorf-Huelsbeck</p>
        </div>

        <form className="inline" action="./#site-nav" method="get">
          <button className="to-top">
            <i className="fa fa-arrow-up"></i>
          </button>
        </form>
      </div>
    </footer>
  );
}

export default SiteFooter;
