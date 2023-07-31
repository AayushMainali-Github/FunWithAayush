import { drawpart } from "./drawpart";

export async function drawCanvas(canvas: CanvasRenderingContext2D, board: Array<Array<string>>, canvasSize: number, sources: any) {
  clearCanvas(canvas, canvasSize);

  let boxsize = canvasSize / 3;
  let padding = boxsize / 70;
  //draw board
  await board.forEach(async (e) => {
    await e.forEach(async (e1) => {
      let i = board.indexOf(e);
      let j = e.indexOf(e1);
      if (board[i][j] === "") return;
      await drawpart(canvas, boxsize, padding, board, i, j, sources);
    });
  });
}

export function clearCanvas(canvas: CanvasRenderingContext2D, canvasSize: number) {
  canvas.clearRect(0, 0, canvasSize, canvasSize);
}
