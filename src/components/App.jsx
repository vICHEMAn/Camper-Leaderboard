import React from 'react';
import Leaderboard from './Leaderboard';
import Nav from './Nav';

import '../stylesheets/index.scss';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
