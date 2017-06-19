import React from 'react';
import Leaderboard from './Leaderboard';
import Nav from './Nav';
import Title from './Title';

import '../stylesheets/index.scss';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Title />
        <Nav />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
