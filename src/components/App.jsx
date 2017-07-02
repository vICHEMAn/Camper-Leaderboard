import React, { Component } from 'react';
import Leaderboard from './Leaderboard';
import Nav from './Nav';
import Title from './Title';

import '../stylesheets/index.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'recent',
    };
    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(filter) {
    this.setState({ selected: filter });
  }

  render() {
    return (
      <div className="container">
        <Title />
        <Nav
          setSelected={this.setSelected}
          selected={this.state.selected}
        />
        <Leaderboard
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default App;
