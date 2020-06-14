import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/movieinfo">
              MovieInfo
            </NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="https://www.imdb.com">
              IMDB
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
