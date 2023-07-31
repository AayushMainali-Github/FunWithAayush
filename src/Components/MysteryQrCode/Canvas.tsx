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
    if (!canvasElem.current) return;

    //widht and height
    canvasElem.current.height = canvasSize;
    canvasElem.current.width = canvasSize;

    //manipulating the canvas
    const canvas = canvasElem.current.getContext("2d") as CanvasRenderingContext2D;
    (async () => {
      let sources: any = {};
      let imageloadpromise;
      let one: HTMLImageElement;
      let two: HTMLImageElement;
      let three: HTMLImageElement;
      let four: HTMLImageElement;
      let five: HTMLImageElement;
      let six: HTMLImageElement;
      let seven: HTMLImageElement;
      let eight: HTMLImageElement;
      imageloadpromise = new Promise((resolve) => {
        one = new Image();
        one.src = `/qrcodes/1.png`;
        one.onload = resolve;
        sources["1"] = one;
      });
      await imageloadpromise;
      imageloadpromise = new Promise((resolve) => {
        two = new Image();
        two.src = `/qrcodes/2.png`;
        two.onload = resolve;
        sources["2"] = two;
      });
      await imageloadpromise;
      imageloadpromise = new Promise((resolve) => {
        three = new Image();
        three.src = `/qrcodes/3.png`;
        three.onload = resolve;
        sources["3"] = three;
      });
      await imageloadpromise;
      imageloadpromise = new Promise((resolve) => {
        four = new Image();
        four.src = `/qrcodes/4.png`;
        four.onload = resolve;
        sources["4"] = four;
      });
      await imageloadpromise;
      imageloadpromise = new Promise((resolve) => {
        five = new Image();
        five.src = `/qrcodes/5.png`;
        five.onload = resolve;
        sources["5"] = five;
      });
      await imageloadpromise;
      imageloadpromise = new Promise((resolve) => {
        six = new Image();
        six.src = `/qrcodes/6.png`;
        six.onload = resolve;
        sources["6"] = six;
      });
      await imageloadpromise;
      imageloadpromise = new Promise((resolve) => {
        seven = new Image();
        seven.src = `/qrcodes/7.png`;
        seven.onload = resolve;
        sources["7"] = seven;
      });
      await imageloadpromise;
      imageloadpromise = new Promise((resolve) => {
        eight = new Image();
        eight.src = `/qrcodes/8.png`;
        eight.onload = resolve;
        sources["8"] = eight;
      });
      await imageloadpromise;

      await drawCanvas(canvas, board, canvasSize, sources);
    })();
  }, [board, canvasSize]);

  //move
  const move = (e: MouseEvent) => {
    e.preventDefault();
    movepart(canvasSize, board, setBoard, e, navigate);
  };
  return <canvas ref={canvasElem} onClick={move}></canvas>;
};

export default Canvas;
