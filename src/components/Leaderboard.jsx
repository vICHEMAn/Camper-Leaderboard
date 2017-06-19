import React from 'react';
import '../stylesheets/_Leaderboard.scss';

class Leaderboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false,
      fccData: [],
    };
  }

  componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then((response) => {
      if (!response.ok) {
        throw Error('Network request failed');
      }
      return response;
    })
    .then(data => data.json())
    .then((data) => {
      this.setState({
        fccData: data,
      });
    }, () => {
      this.setState({
        requestFailed: true,
      });
    });
  }

  render() {
    return (
      <div className="table-container">
        <table>
          <tbody>
            {this.state.fccData.map((user, i) =>
              (
                <tr key={user.username}>
                  <td><p>{i + 1}</p></td>
                  <td><img src={user.img} alt="" /><p>{user.username}</p></td>
                  <td className="td-active"><p>{user.recent}</p></td>
                  <td><p>{user.alltime}</p></td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
