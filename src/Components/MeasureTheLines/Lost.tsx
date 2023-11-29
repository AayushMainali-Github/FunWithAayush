import React from 'react';
import { LostProps } from '../../types/WhatTimeIsItProps';
import '../../Css/WhatTimeIsIt/Lost.css';

const Lost = (props: LostProps) => {
  //on play again click
  const playAgain = props.playagain;

  return (
    <div className="lost">
      <div className="desc">You chose the wrong option ☹️</div>
      <div className="desc">You guessed {props.score} questions correctly.</div>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
};

export default Lost;
