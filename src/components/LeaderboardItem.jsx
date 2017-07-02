import React from 'react';

const LeaderboardItem = (props) => {
  return (
    <tr key={props.key}>
      <td>
        <p>{props.number}</p>
      </td>
      <td>
        <img src={props.camper.img} alt="" />
        <p>{props.camper.username}</p>
      </td>
      <td className={(props.selected === 'recent' ? 'td-active' : '')}>
        <p>{props.camper.recent}</p>
      </td>
      <td className={(props.selected === 'allTime' ? 'td-active' : '')}>
        <p>{props.camper.alltime}</p>
      </td>
    </tr>
  );
};

export default LeaderboardItem;
