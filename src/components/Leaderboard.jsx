import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/_Leaderboard.scss';
import LeaderboardItem from './LeaderboardItem';

class Leaderboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      allTime: [],
    };
    this.fetchRecent = this.fetchRecent.bind(this);
    this.fetchAllTime = this.fetchAllTime.bind(this);
  }

  componentWillMount() {
    axios.all([this.fetchRecent(), this.fetchAllTime()])
    .then(axios.spread((recent, allTime) => {
      this.setState({
        recent: recent.data,
        allTime: allTime.data,
      });
    }));
  }

  fetchRecent() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  fetchAllTime() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  render() {
    const currentArray = this.state[this.props.selected];
    return (
      <div className="table-container">
        <table>
          <tbody>
            {currentArray.map((camper, index) => (
              <LeaderboardItem
                camper={camper}
                key={camper.username}
                selected={this.props.selected}
                number={index + 1}
              />
              ),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
