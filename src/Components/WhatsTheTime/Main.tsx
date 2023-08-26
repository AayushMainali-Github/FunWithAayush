import React, { useEffect, useState } from 'react';
import '../../Css/WhatTimeIsIt/Main.css';
import Guess from './Guess';
import Won from './Won';
import Lost from './Lost';
import Nav from '../Nav';
import randomTime from '../../utils/WhatTimeIsIt/randomTime';

const WhatTimeIsIt = () => {
  //update
  const [time, setTime] = useState<Array<number>>(randomTime());
  const update = (correct: boolean) => {
    if (correct) {
      setScore(score + 1);
      setTime(randomTime());
    } else setPlaying('lost');
  };

  // time
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [start, setStart] = useState<number>(Date.now());
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer(Math.trunc((Date.now() - start) / 100));
    }, 100);
  });

  //playing
  const [playing, setPlaying] = useState<string>();

  //score
  const [score, setScore] = useState<number>(0);

  //play again
  const playagain = () => {
    setStart(Date.now());
    setTimer(0);
    setTimeout(() => {
      setPlaying('');
      setTime(randomTime());
      setScore(0);
    }, 200);
  };

  return (
    <div className="whattimeisit">
      <Nav />
      {playing === 'lost' ? (
        <Lost playagain={playagain} score={score} />
      ) : timer >= 600 ? (
        <Won playagain={playagain} score={score} />
      ) : (
        <>
          <div className="head">What's The Time?</div>
          <div className="time">{(60 - timer / 10).toFixed(1)}s Left</div>
          <Guess hour={time[0]} minute={time[1]} update={update} />
        </>
      )}
    </div>
  );
};

export default WhatTimeIsIt;
