import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const linkStyle = {
    textDecoration: 'none',
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" style={linkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" style={linkStyle}>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/directors" style={linkStyle}>
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink to="/actors" style={linkStyle}>
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
