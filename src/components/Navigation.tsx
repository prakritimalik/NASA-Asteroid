
import React from 'react';
import {

    Link,

  } from "react-router-dom";

const Navigation = () => {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">NASA Asteroids</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item p-2">
          <Link to="/asteroid-list">Asteroid List</Link>
          </li>
          <li className="nav-item p-2">
          <Link to="/search-asteroid-id">Search Asteroid by ID</Link>
          </li>
          <li className="nav-item p-2">
          <Link to="/search-asteroid-date">Search Asteroid by Closest Date</Link>
          </li>
        </ul>
      </div>
    </nav>
      </div>
      );
}




export default Navigation;