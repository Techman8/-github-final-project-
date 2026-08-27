import { NavLink } from 'react-router-dom'; 
import './Navigation.css';

function Navigation({ isLoggedIn, onLoginClick, onLogout, theme }) {
  return (
    <nav className={`navigation navigation_theme_${theme}`}>
      
      <div className="navigation__links">
        {/* 2. Use NavLink and apply standard visual indicators dynamically based on state */}
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `navigation__link ${isActive ? 'navigation__link_active' : ''}`
          }
        >
          Home
        </NavLink>
        
        {isLoggedIn && (
          <NavLink 
            to="/saved-news" 
            className={({ isActive }) => 
              `navigation__link ${isActive ? 'navigation__link_active' : ''}`
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
          User <span className="navigation__logout-icon"></span>
        </button>
      ) : (
        <button 
          className="navigation__button navigation__button_type_login" 
          onClick={onLoginClick}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
