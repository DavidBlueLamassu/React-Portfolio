import React from 'react';
import { NavLink } from 'react-router-dom';

// Navbar Nav: list format: https://getbootstrap.com/docs/4.3/components/navbar/

const styles = {
  page: {
    background: "#e2dddd",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    borderBottom: "solid black 1px",
  }
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={styles.page}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="portfolio"
              end
              className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              end
              className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
   
    
    
    
  );
}

export default Navbar;
