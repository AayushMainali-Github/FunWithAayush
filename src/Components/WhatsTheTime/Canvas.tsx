import React, { useEffect, useRef, useState } from 'react';
import '../../Css/MysteryQrCode/Canvas.css';
import { CanvasProps } from '../../types/WhatTimeIsItProps';

const Canvas = (props: CanvasProps) => {
  const canvasElem = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [canvasSize, setCanvasSize] = useState<number>(200);
  //canvas setup
  useEffect(() => {
    if (!canvasElem.current) return;

    //widht and height
    canvasElem.current.height = canvasSize;
    canvasElem.current.width = canvasSize;

    //the canvas
    const canvas: CanvasRenderingContext2D = canvasElem.current.getContext('2d') as CanvasRenderingContext2D;

    //clock setup
    //the circle
    canvas.lineWidth = canvasSize / 300;
    canvas.beginPath();
    canvas.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2.25, 0, 360);
    canvas.stroke();
    //the dot in the middle
    canvas.beginPath();
    canvas.arc(canvasSize / 2, canvasSize / 2, canvasSize / 100, 0, 360);
    canvas.fill();
    canvas.stroke();

    //the numbers
    canvas.font = `bold ${canvasSize / 15}px serif`;
    for (let i = -2; i <= 9; i++) {
      let text: string = (i + 3).toString();
      canvas.save();
      canvas.translate(canvasSize / 2, canvasSize / 2);
      canvas.rotate((i * Math.PI) / 6);
      canvas.translate(canvasSize / 2.45, 0);
      canvas.rotate(-(i * Math.PI) / 6);
      canvas.fillText(text, -canvas.measureText(text).width / 2, canvas.measureText(text).width / 2);
      canvas.restore();
    }

    //the hands
    const hour: number = props.hour - 3;
    let minute: number = props.minute;
    //hour hand
    canvas.save();
    canvas.translate(canvasSize / 2, canvasSize / 2);
    canvas.rotate((hour * 30 * Math.PI) / 180 + (minute * Math.PI) / 360);
    canvas.moveTo(0, 0);
    canvas.lineWidth = canvasSize / 50;
    canvas.lineTo(canvasSize / 4, 0);
    canvas.stroke();
    canvas.restore();
    //minute hand
    minute -= 3 * 5;
    canvas.save();
    canvas.translate(canvasSize / 2, canvasSize / 2);
    canvas.rotate((minute * 6 * Math.PI) / 180);
    canvas.moveTo(0, 0);
    canvas.lineWidth = canvasSize / 100;
    canvas.lineTo(canvasSize / 2.75, 0);
    canvas.stroke();
    canvas.restore();
  }, [canvasSize, props]);
  return <canvas ref={canvasElem}></canvas>;
};

export default Canvas;
