import React from 'react';
import '../stylesheets/_Nav.scss';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: '30days',
    };
  }

  setSelected(filter) {
    this.setState({ selected: filter });
  }

  isActive(value) {
    return `nav clickable ${(value === this.state.selected) ? 'active' : 'default'}`;
  }

  render() {
    return (
      <div className="button-row">
        <div className="nav">Rank</div>
        <div className="nav">Name</div>
        <div className={this.isActive('30days')} onClick={() => this.setSelected('30days')} role="button" tabIndex={0}>30 Days</div>
        <div className={this.isActive('allTime')} onClick={() => this.setSelected('allTime')} role="button" tabIndex={0}>All-Time</div>
      </div>
    );
  }
}

export default Nav;
