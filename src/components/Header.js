import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  //Sets fonts, navbar background to pale gray and a thin black line to separate navbar from page components
  page: {
    background: "#e2dddd",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    borderBottom: "solid black 1px",
  }
}

//The navbar below is a Boostrap component: Navbar, Nav with unordered list format from: 
//https://getbootstrap.com/docs/4.3/components/navbar/ The navbar uses react-router to navigate between the 
//Home, Portfolio and Contact components. As the navbar button would not open merely by importing Bootstrap into
//the index.js file, JavaScript links were also set up in index.html as suggested by Malhar Kulkarni in reply to a 
//post on "Stack Overflow": Aditya Chopra, "Why is my navbar collapse toggle not working in react", Stack Overflow
//(19 May 2019), last viewed: 14 March 2023: 
//https://stackoverflow.com/questions/56207103/why-is-my-navbar-collapse-toggle-not-working-in-react
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
