import React from 'react';
import { WonProps } from '../../types/WhatTimeIsItProps';
import '../../Css/WhatTimeIsIt/Won.css';

const Won = (props: WonProps) => {
  //on play again click
  const playAgain = props.playagain;

  return (
    <div className="won">
      {props.score !== 0 ? (
        <>
          <div className="desc">Congratulations! You guessed {props.score} questions correctly.</div>
          <div className="desc">You took {(60 / props.score).toFixed(2)} seconds on average to answer a question.</div>
        </>
      ) : (
        <>
          <div className="desc">You answered 0 questions ☹️</div>
          <div className="desc">You better answer some questions next time or I will haunt you in dreams.</div>
        </>
      )}
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
};

export default Won;
