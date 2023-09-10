import React, { useState } from 'react';
import War from './War';
import Configure from './Configure';
import Nav from '../Nav';
import '../../Css/ColorWars/Main.css';

const Main = () => {
  const [count, setCount] = useState<2 | 4 | 8>(2);
  const [dimension, setDimension] = useState<64 | 128 | 256>(128);
  const [changeScreen, setChangeScreen] = useState<boolean>(false);
  return (
    <div className="colorwars">
      <Nav />
      {changeScreen ? (
        <War colorCount={count} canvasSize={dimension} />
      ) : (
        <Configure setCount={setCount} setDimension={setDimension} setChangeScreen={setChangeScreen} />
      )}
    </div>
  );
};

export default Main;
