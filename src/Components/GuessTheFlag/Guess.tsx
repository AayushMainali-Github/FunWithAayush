import React, { MouseEvent } from 'react';
import { GuessProps } from '../../types/GuessTheFlagProps';
import { FlagData, Option } from '../../types/FlagData';
import '../../Css/GuessTheFlag/Guess.css';

const Guess = (props: GuessProps) => {
  //flags data
  const flagData: FlagData = props.flagData;
  const optionsArr: Array<Option> = flagData.options;

  //on option click
  const optionClick = (event: MouseEvent) => {
    const targetElem = event.target as HTMLButtonElement;
    if (targetElem.innerText === correct?.flag.name) props.update(true);
    else props.update(false);
  };

  //add options
  let correct: Option | null = null;
  let buttons: Array<JSX.Element> = [];
  for (let i = 0; i < optionsArr.length; i++) {
    if (optionsArr[i].correct) correct = optionsArr[i];
    buttons.push(
      <button onClick={optionClick} key={i}>
        {optionsArr[i].flag.name}
      </button>
    );
  }

  return (
    <div className="guess">
      <div className="score">
        Score: {props.score}/{props.totalFlags}
      </div>
      <div className="flagMain">
        <img src={correct?.flag.link} alt="flag" />
        <div className="options">{buttons}</div>
      </div>
    </div>
  );
};

export default Guess;
