import { drawpart } from "./drawpart";

export function drawCanvas(canvas: CanvasRenderingContext2D, board: Array<Array<string>>, canvasSize: number, qrimg: HTMLImageElement) {
  clearCanvas(canvas, canvasSize);

  let boxsize = canvasSize / 3;
  let padding = boxsize / 70;
  //draw board
  board.forEach((e) => {
    e.forEach((e1) => {
      let i = board.indexOf(e);
      let j = e.indexOf(e1);
      if (board[i][j] === "") return;
      drawpart(canvas, boxsize, padding, board, i, j, qrimg);
    });
  });
}

export function clearCanvas(canvas: CanvasRenderingContext2D, canvasSize: number) {
  canvas.clearRect(0, 0, canvasSize, canvasSize);
}
