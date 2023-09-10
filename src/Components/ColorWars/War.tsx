import React, { useEffect, useState } from 'react';
import Canvas from './Canvas';
import generateScreen from '../../utils/ColorWars/generateScreen';
import war from '../../utils/ColorWars/war';
import Leaderboard from './Leaderboard';
import averageArr from '../../utils/ColorWars/averageArr';
import { WarProps } from '../../types/ColorWarsProps';
import '../../Css/ColorWars/War.css';

const War = (props: WarProps) => {
  //constants
  const colorCount: 2 | 4 | 8 = props.colorCount;
  const canvasSize: 64 | 128 | 256 = props.canvasSize;
  //fps
  const [fpsArr, setfpsArr] = useState<Array<number>>([]);
  const [fps, setFps] = useState<number>(0);
  const [maxfps, setMaxFps] = useState<number>(100);
  //intensity
  const [intensity, setIntensity] = useState<number>(2);
  //screen
  const [screen, setScreen] = useState<Array<Array<string>>>(war(generateScreen(colorCount, canvasSize), intensity));

  useEffect(() => {
    let fpsArray: Array<number> = fpsArr;
    let oldTime = Date.now();

    const interval = setInterval(() => {
      // update the canvas
      const newScreen = war(screen, intensity);
      setScreen(newScreen);

      //update the fps
      let newTime = Date.now();
      fpsArray.push(1 / ((newTime - oldTime) / 1000));
      if (fpsArray.length > 50) fpsArray.splice(0, fpsArray.length - 50);
      setFps(averageArr(fpsArray));
      setfpsArr(fpsArray);
    }, 1000 / maxfps);
    return () => {
      clearInterval(interval);
    };
  }, [fpsArr, intensity, maxfps, screen]);

  //for intensity
  const intensitySlider = (e: any) => {
    setIntensity(e.target.valueAsNumber);
  };
  //for maxfps
  const maxfpsSlider = (e: any) => {
    setMaxFps(e.target.valueAsNumber);
    setfpsArr([]);
  };

  return (
    <div className="war">
      <Leaderboard screen={screen} />
      <Canvas screen={screen} scale={512 / canvasSize} />
      <div className="settings">
        <div className="header">Settings</div>
        <div className="fps">FPS: {fps.toFixed(0)}</div>
        <div className="dimension">
          Dimension: {canvasSize}x{canvasSize}
        </div>
        <div className="intensity">
          Intensity: <input min={1} max={10} value={intensity} type="range" onChange={intensitySlider} /> ({intensity})
        </div>
        <div className="maxfps">
          Max FPS: <input min={1} max={360} value={maxfps} type="range" onChange={maxfpsSlider} /> ({maxfps})
        </div>
      </div>
    </div>
  );
};

export default War;
