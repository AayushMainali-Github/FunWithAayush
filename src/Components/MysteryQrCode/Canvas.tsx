import React, { useEffect, useRef, useState, MouseEvent } from "react";
import "../../Css/MysteryQrCode/Canvas.css";
import { drawCanvas } from "../../utils/MysteryQrCode/drawCanvas";
import { movepart } from "../../utils/MysteryQrCode/movepart";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { getsource } from "../../utils/MysteryQrCode/getSource";

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
    canvas.imageSmoothingEnabled = false;

    let qrimg: HTMLImageElement = getsource();

    qrimg.onload = () => {
      drawCanvas(canvas, board, canvasSize, qrimg);
    };

    drawCanvas(canvas, board, canvasSize, qrimg);
  }, [board, canvasSize]);

  //move
  const move = (e: MouseEvent) => {
    e.preventDefault();
    movepart(canvasSize, board, setBoard, e, navigate);
  };
  return <canvas ref={canvasElem} onClick={move}></canvas>;
};

export default Canvas;
