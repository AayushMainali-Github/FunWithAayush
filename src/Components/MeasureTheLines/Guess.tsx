import React, { useEffect, useState, MouseEvent } from 'react';
import '../../Css/WhatTimeIsIt/Guess.css';
import { GuessProps } from '../../types/MeasureTheLinesProps';
import { getOptions } from '../../utils/MeasureTheLines/options';

const Guess = (props: GuessProps) => {
  //   console.log(props.length);

  //options
  const [buttons, setButtons] = useState<Array<JSX.Element>>();
  useEffect(() => {
    //on click event
    const optionClick = (event: MouseEvent) => {
      const targetElem = event.target as HTMLButtonElement;

      if (targetElem.innerText === `${props.length} cm`) props.update(true);
      else props.update(false);
    };

    let tempButtons: Array<JSX.Element> = [];
    const options: Array<number> = getOptions(props.length);
    for (let i = 0; i < options.length; i++) {
      tempButtons.push(
        <button onClick={optionClick} key={i}>
          {options[i]} cm
        </button>
      );
    }
    setButtons(tempButtons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.length]);

  return (
    <div className="guessWTIS">
      <div className="options">{buttons}</div>
    </div>
  );
};

export default Guess;
