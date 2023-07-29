import React from 'react';
import { LostProps } from '../../types/Props';
import '../../Css/GuessTheFlag/Lost.css';

const Lost = (props: LostProps) => {
  //on play again click
  const playAgain = props.playagain;

  return (
    <div className="lost">
      <div className="desc">You chose the wrong option ☹️</div>
      <div className="score">
        Score: {props.score}/{props.totalFlags} ({((props.score / props.totalFlags) * 100).toFixed(2)}%)
      </div>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
};

export default Lost;
