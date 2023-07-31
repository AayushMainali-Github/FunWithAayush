import React, { useEffect, useRef, useState, MouseEvent } from "react";
import "../../Css/MysteryQrCode/Canvas.css";
import { drawCanvas } from "../../utils/MysteryQrCode/drawCanvas";
import { movepart } from "../../utils/MysteryQrCode/movepart";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Canvas = () => {
  const navigate: NavigateFunction = useNavigate();
  const canvasElem = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState<number>(400);
  if (window.innerWidth <= 500 && canvasSize !== 280) setCanvasSize(280);
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 500) setCanvasSize(280);
    else if (window.innerWidth > 500) setCanvasSize(400);
  });
  const [board, setBoard] = useState<Array<Array<string>>>([
    ["2", "4", "3"],
    ["6", "7", "8"],
    ["1", "5", ""],
  ]);
  //canvas setup
  useEffect(() => {
    let one: HTMLImageElement = new Image();
    one.src = `/qrcodes/1.png`;
    let two: HTMLImageElement = new Image();
    two.src = `/qrcodes/2.png`;
    let three: HTMLImageElement = new Image();
    three.src = `/qrcodes/3.png`;
    let four: HTMLImageElement = new Image();
    four.src = `/qrcodes/4.png`;
    let five: HTMLImageElement = new Image();
    five.src = `/qrcodes/5.png`;
    let six: HTMLImageElement = new Image();
    six.src = `/qrcodes/6.png`;
    let seven: HTMLImageElement = new Image();
    seven.src = `/qrcodes/7.png`;
    let eight: HTMLImageElement = new Image();
    eight.src = `/qrcodes/8.png`;
    let sources: any = {
      1: one,
      2: two,
      3: three,
      4: four,
      5: five,
      6: six,
      7: seven,
      8: eight,
    };

    sources["8"].onload = async () => {
      if (!canvasElem.current) return;

      //widht and height
      canvasElem.current.height = canvasSize;
      canvasElem.current.width = canvasSize;

      //manipulating the canvas
      const canvas = canvasElem.current.getContext("2d") as CanvasRenderingContext2D;

      await drawCanvas(canvas, board, canvasSize, sources);
    };
  }, [board, canvasSize]);

  //move
  const move = (e: MouseEvent) => {
    e.preventDefault();
    movepart(canvasSize, board, setBoard, e, navigate);
  };
  return <canvas ref={canvasElem} onClick={move}></canvas>;
};

export default Canvas;
