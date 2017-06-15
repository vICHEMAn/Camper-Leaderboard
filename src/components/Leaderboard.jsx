import React from 'react';
import '../stylesheets/_Leaderboard.scss';

class Leaderboard extends React.Component {

  render() {
    return (
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td>1</td>
              <td>Viche</td>
              <td>501</td>
              <td>2130</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
