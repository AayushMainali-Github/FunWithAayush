import React, { useEffect, useState, MouseEvent } from 'react';
import { GuessProps } from '../../types/WhatTimeIsItProps';
import '../../Css/WhatTimeIsIt/Guess.css';
import Canvas from './Canvas';
import { getOptions } from '../../utils/WhatTimeIsIt/options';
import formatTime from '../../utils/WhatTimeIsIt/formatTime';

const Guess = (props: GuessProps) => {
  const hour: number = props.hour;
  const minute: number = props.minute;
  const update = props.update;
  //options
  const [buttons, setButtons] = useState<Array<JSX.Element>>();
  useEffect(() => {
    //on click event
    const optionClick = (event: MouseEvent) => {
      const targetElem = event.target as HTMLButtonElement;
      if (targetElem.innerText === `${formatTime(hour)}:${formatTime(minute)}`) update(true);
      else update(false);
    };

    let tempButtons: Array<JSX.Element> = [];
    const options: Array<string> = getOptions(hour, minute);
    for (let i = 0; i < options.length; i++) {
      tempButtons.push(
        <button onClick={optionClick} key={i}>
          {options[i]}
        </button>
      );
    }
    setButtons(tempButtons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hour, minute, props.score]);

  return (
    <div className="guessWTIS">
      <Canvas hour={hour} minute={minute} />
      <div className="options">{buttons}</div>
    </div>
  );
};

export default Guess;
