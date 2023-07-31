import React, { useState } from 'react';
import getRandomFlags from '../../utils/GuessTheFlag/getRandomFlags';
import { FlagData } from '../../types/FlagData';
import Guess from './Guess';
import Lost from './Lost';
import '../../Css/GuessTheFlag/Main.css';
import Won from './Won';
import Nav from '../Nav';

const Main = () => {
  //get flags
  const totalFlags: number = 193;
  const totalOptions: number = 4;
  const [ranflags, setRanflags] = useState<Array<FlagData>>(getRandomFlags(totalFlags, totalOptions));

  //score
  const [score, setScore] = useState<number>(0);

  //update
  const [playing, setPlaying] = useState<string>('true');
  const update = (correct: boolean) => {
    if (correct && score < totalFlags - 1) setScore(score + 1);
    else if (correct) setPlaying('won');
    else {
      setPlaying('lost');
    }
  };

  //play again
  const playagain = () => {
    setRanflags(getRandomFlags(totalFlags, totalOptions));
    setScore(0);
    setPlaying('true');
  };

  return (
    <div className="guesstheflag">
      <Nav />
      <div className="head">Guess the flag</div>
      {playing === 'true' ? (
        <Guess score={score} totalFlags={totalFlags} flagData={ranflags[score]} key={score} update={update} />
      ) : playing === 'lost' ? (
        <Lost playagain={playagain} score={score} totalFlags={totalFlags} />
      ) : playing === 'won' ? (
        <Won playagain={playagain} totalFlags={totalFlags} />
      ) : (
        'An error occurred'
      )}
    </div>
  );
};

export default Main;
