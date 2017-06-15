import React from 'react';
import '../stylesheets/_Nav.scss';

const Nav = () => (
  <div className="button-row">
    <div className="button-container">
      <div className="nav">Rank</div>
      <div className="nav">Name</div>
    </div>
    <div className="button-container">
      <button className="nav 30days">30 Days</button>
      <button className="nav AllTime">All-Time</button>
    </div>
  </div>
);

export default Nav;
