import React from 'react';
import { render } from 'react-dom';
import Leaderboard from './components/Leaderboard'

window.React = React;

render(
  <Leaderboard />,
  document.getElementById('root'),
);
