import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/_Leaderboard.scss';
import LeaderboardItem from './LeaderboardItem';

class Leaderboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fccRecent: [],
      fccAlltime: [],
    };
    this.fetchRecent = this.fetchRecent.bind(this);
    this.fetchAllTime = this.fetchAllTime.bind(this);
  }

  componentWillMount() {
    axios.all([this.fetchRecent(), this.fetchAllTime()])
    .then(axios.spread((recent, allTime) => {
      this.setState({
        fccRecent: recent.data,
        fccAlltime: allTime.data,
      });
    }));
  }

  fetchRecent() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  fetchAllTime() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  whichData() {
    return (this.props.selected === '30days' ?
    this.state.fccRecent :
    this.state.fccAlltime
    );
  }

  render() {
    return (
      <div className="table-container">
        <table>
          <tbody>
            <LeaderboardItem data={this.whichData} selected={this.props.selected} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
