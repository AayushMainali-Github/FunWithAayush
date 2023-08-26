import React from 'react';
import { WonProps } from '../../types/GuessTheFlagProps';
import '../../Css/GuessTheFlag/Won.css';

const Won = (props: WonProps) => {
  //on play again click
  const playAgain = props.playagain;

  return (
    <div className="won">
      <div className="desc">Congratulations! You correctly guessed all {props.totalFlags} flags.</div>
      <div className="desc">Here is a cookie for you 🍪</div>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
};

export default Won;
