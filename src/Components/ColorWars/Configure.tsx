import React, { useState, MouseEvent } from 'react';
import '../../Css/ColorWars/Configure.css';
import ConfigureItem from './ConfigureItem';
import { ConfigureProps } from '../../types/ColorWarsProps';

const Configure = (props: ConfigureProps) => {
  const [activeCount, setActiveCount] = useState<2 | 4 | 8>(2);
  const [activeDimension, setActiveDimension] = useState<64 | 128 | 256>(128);
  const clickev = (ev: MouseEvent) => {
    ev.preventDefault();
    props.setCount(activeCount);
    props.setDimension(activeDimension);
    props.setChangeScreen(true);
  };
  return (
    <div className="configure">
      <button onClick={clickev}>Go</button>
      <div className="configureItem">
        <div className="header">Choose Color Count: </div>
        <div className="items">
          <ConfigureItem value={2} str="2 Colors" active={activeCount} setActive={setActiveCount} />
          <ConfigureItem value={4} str="4 Colors" active={activeCount} setActive={setActiveCount} />
          <ConfigureItem value={8} str="8 Colors" active={activeCount} setActive={setActiveCount} />
        </div>
      </div>
      <div className="configureItem">
        <div className="header">Choose Dimension: </div>
        <div className="items">
          <ConfigureItem value={64} str="64x64" active={activeDimension} setActive={setActiveDimension} />
          <ConfigureItem value={128} str="128x128" active={activeDimension} setActive={setActiveDimension} />
          <ConfigureItem value={256} str="256x256" active={activeDimension} setActive={setActiveDimension} />
        </div>
      </div>
    </div>
  );
};

export default Configure;
