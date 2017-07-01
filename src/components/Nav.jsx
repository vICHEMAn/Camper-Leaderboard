import React, { PropTypes } from 'react';
import '../stylesheets/_Nav.scss';

const Nav = ({ setSelected, selected }) => {
  const isActive = value => `nav clickable ${(value === selected) ? 'active' : 'default'}`;
  return (
    <div className="button-row">
      <div className="nav">Rank</div>
      <div className="nav">Name</div>
      <div
        className={isActive('30days')}
        onClick={() => setSelected('30days')}
        role="button"
        tabIndex={0}
      >30 Days</div>
      <div
        className={isActive('allTime')}
        onClick={() => setSelected('allTime')}
        role="button"
        tabIndex={0}
      >All-Time</div>
    </div>
  );
};

Nav.propTypes = {
  setSelected: PropTypes.func,
  selected: PropTypes.string,
};

export default Nav;
