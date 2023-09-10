import React, { useState, useEffect } from 'react';
import { LeaderboardProps } from '../../types/ColorWarsProps';

const Leaderboard = (props: LeaderboardProps) => {
  const [arr, setArr] = useState<Array<JSX.Element>>();
  useEffect(() => {
    //color code to name
    let colors: Record<string, string> = {
      '#FF0800': 'Red',
      '#FF4F00': 'Orange',
      '#964B00': 'Brown',
      '#FDEE00': 'Yellow',
      '#66FF00': 'Green',
      '#0FFFFF': 'Cyan',
      '#8A2BE2': 'Purple',
      '#FF1DCE': 'Pink',
    };

    const screen = props.screen;

    //get leaderboard
    const leaderboardObj: Record<string, number> = {};
    for (let i = 0; i < screen.length; i++) {
      for (let j = 0; j < screen.length; j++) {
        if (!leaderboardObj[screen[i][j]]) leaderboardObj[screen[i][j]] = 1;
        else leaderboardObj[screen[i][j]]++;
      }
    }

    //sort the leaderboard
    let objKeys: Array<string> = Object.keys(leaderboardObj).sort(function (b, a) {
      return leaderboardObj[a] - leaderboardObj[b];
    });

    //convert to jsx element
    const tempArr = [];
    for (let i = 0; i < objKeys.length; i++) {
      tempArr.push(<div key={i}>{`${i + 1}. ${colors[objKeys[i]]} ${leaderboardObj[objKeys[i]]}`}</div>);
    }
    setArr(tempArr);
  }, [props.screen]);
  return (
    <div className="leaderboard">
      <div className="header">Leaderboard</div>
      <div className="items"> {arr}</div>
    </div>
  );
};

export default Leaderboard;
