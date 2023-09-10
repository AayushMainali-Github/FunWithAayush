import React, { useEffect, useRef, useState } from 'react';
import { CanvasProps } from '../../types/ColorWarsProps';

const Canvas = (props: CanvasProps) => {
  const canvasElem = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [canvasSize, setCanvasSize] = useState<number>(props.screen.length * props.scale);
  //canvas setup
  useEffect(() => {
    const screen = props.screen;
    if (!canvasElem.current) return;

    //widht and height
    canvasElem.current.height = canvasSize;
    canvasElem.current.width = canvasSize;

    //the canvas
    const canvas: CanvasRenderingContext2D = canvasElem.current.getContext('2d') as CanvasRenderingContext2D;

    //draw pixels
    for (let i = 0; i < screen.length; i++) {
      for (let j = 0; j < screen.length; j++) {
        canvas.fillStyle = screen[i][j];
        canvas.fillRect(i * props.scale, j * props.scale, props.scale, props.scale);
      }
    }
  }, [canvasSize, props]);
  return <canvas ref={canvasElem}></canvas>;
};

export default Canvas;
