import { Link } from "react-router-dom";
import "./Footer.css";
import githubIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} NewsExplorer, Powered by News API
      </p>

      <div className="footer__links">
        <div className="footer__text-links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            href="https://tripleten.com"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            TripleTen
          </a>
        </div>

        <div className="footer__icon-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="footer__icon-link"
            aria-label="Visit our GitHub"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="footer__icon footer__icon_type_github"
            />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="footer__icon-link"
            aria-label="Visit our LinkedIn"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="footer__icon footer__icon_type_linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
