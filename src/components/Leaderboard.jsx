import React from 'react';

import '../stylesheets/_Leaderboard.scss';
import '../stylesheets/index.scss';

class Leaderboard extends React.Component {

  render() {
    return (
      <div className="container">
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
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>30 Days</th>
                <th>All-Time</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Viche</td>
                <td>501</td>
                <td>2130</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
