import React, { useEffect, useState } from 'react';
import '../../Css/WhatTimeIsIt/Main.css';
import Guess from './Guess';
import Won from './Won';
import Lost from './Lost';
import Nav from '../Nav';
import randomLength from '../../utils/MeasureTheLines/randomLength';

const WhatTimeIsIt = () => {
  // limits
  const [score, setScore] = useState<number>(0);
  const [upperlimit] = useState<number>(Math.ceil((window.innerHeight / 2) * (2.54 / (window.devicePixelRatio * 96))));
  const [turn, setTurn] = useState<number>(Math.random() * 360);

  //update
  const [length, setLength] = useState<number>(randomLength(1, Math.ceil(upperlimit / 3), upperlimit));

  const update = (correct: boolean) => {
    if (correct) {
      setScore(score + 1);
      setLength(randomLength(score + 1, Math.ceil(upperlimit / 3), upperlimit));
      setTurn(Math.random() * 360);
    } else setPlaying('lost');
  };

  // time
  const [start, setStart] = useState<number>(Date.now());
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer(Math.trunc((Date.now() - start) / 100));
    }, 100);
  });

  //playing
  const [playing, setPlaying] = useState<string>();

  //play again
  const playagain = () => {
    setStart(Date.now());
    setTimer(0);
    setTimeout(() => {
      setPlaying('');
      setLength(randomLength(1, Math.ceil(upperlimit / 3), upperlimit));
      setTurn(Math.random() * 360);
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
          <div className="head">Measure The Lines</div>
          <div className="time">{(60 - timer / 10).toFixed(1)}s Left</div>
          <div
            style={{
              height: `${upperlimit}cm`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '1px', height: `${length}cm`, background: 'black', rotate: `${turn}deg` }} />
          </div>
          <Guess length={length} update={update} />
          <div style={{ textAlign: 'center', margin: '30px 25vw 5px', fontSize: '14px', fontWeight: '500' }}>
            Note: The length wont be exact if you measure it from a ruler as it is not possible to get physical dpi of
            your screen. But as you play more you will get familiar with the lengths of the line. Have fun!
          </div>
        </>
      )}
    </div>
  );
};

export default WhatTimeIsIt;
