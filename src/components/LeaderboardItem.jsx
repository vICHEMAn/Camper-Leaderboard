import React from 'react';

const LeaderboardItem = (props) => {
  if (props === undefined) {
    return <td>Loading..</td>;
  }

  return (
    <tr key={props.data.user.username}>
      <td>
        <p>{i + 1}</p>
      </td>
      <td>
        <img src={props.user.img} alt="" />
        <p>{props.user.username}</p>
      </td>
      <td className={(props.selected === '30days' ? 'td-active' : '')}>
        <p>{props.data.user.recent}</p>
      </td>
      <td className={(props.selected === 'allTime' ? 'td-active' : '')}>
        <p>{props.data.user.alltime}</p>
      </td>
    </tr>
  );
};

export default LeaderboardItem;
