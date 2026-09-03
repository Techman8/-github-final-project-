import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, onLoginClick, theme, onLogout }) {
  return (
    <header className={`header header_theme_${theme}`}>
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>

      <Navigation
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogout={onLogout}
        theme={theme}
      />
    </header>
  );
}

export default Header;
