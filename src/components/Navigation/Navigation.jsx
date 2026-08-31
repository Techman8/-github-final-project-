import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, onLoginClick, onLogout, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSignInClick = () => {
    closeMenu();
    onLoginClick();
  };

  return (
    <nav className={`navigation navigation_theme_${theme}`}>
      <div className="navigation__desktop-container">
        <div className="navigation__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation__link navigation__link_theme_${theme} ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/saved-news"
              className={({ isActive }) =>
                `navigation__link navigation__link_theme_${theme} ${isActive ? "navigation__link_active" : ""}`
              }
            >
              Saved articles
            </NavLink>
          )}
        </div>

        {isLoggedIn ? (
          <button
            className="navigation__button navigation__button_type_logout"
            onClick={onLogout}
          >
            User
            <span className="navigation__logout-icon"></span>
          </button>
        ) : (
          <button
            className="navigation__button navigation__button_type_login"
            onClick={onLoginClick}
          >
            Sign in
          </button>
        )}
      </div>

      <button
        className="header__burger-btn"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </button>

      <div className={`nav-overlay ${isMenuOpen ? "is-open" : ""}`}>
        <div className="nav-overlay__header">
          <span className="header__logo">NewsExplorer</span>
          <button
            className="nav-overlay__close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <ul className="nav-overlay__links">
          <li>
            <NavLink to="/" className="nav-overlay__link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <NavLink
                  to="/saved-news"
                  className="nav-overlay__link"
                  onClick={closeMenu}
                >
                  Saved articles
                </NavLink>
              </li>
              <li>
                <button
                  className="navigation__button navigation__button_type_logout nav-overlay__btn-override"
                  onClick={() => {
                    closeMenu();
                    onLogout();
                  }}
                >
                  User
                  <span className="navigation__logout-icon"></span>
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                className="nav-overlay__signin-btn"
                onClick={handleSignInClick}
              >
                Sign in
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
