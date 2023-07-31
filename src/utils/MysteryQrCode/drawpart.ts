export async function drawpart(canvas: CanvasRenderingContext2D, boxsize: number, padding: number, board: Array<Array<string>>, i: number, j: number, sources: any) {
  canvas.drawImage(sources[board[i][j]], j * boxsize + padding, i * boxsize + padding, boxsize - padding - padding, boxsize - padding - padding);
  canvas.lineWidth = padding / 2;
  //top border
  canvas.moveTo(j * boxsize + padding, i * boxsize + padding);
  canvas.lineTo(j * boxsize + boxsize - padding, i * boxsize + padding);
  //left border
  canvas.moveTo(j * boxsize + padding, i * boxsize + padding);
  canvas.lineTo(j * boxsize + padding, i * boxsize + boxsize - padding);
  //bottom border
  canvas.moveTo(j * boxsize + padding, i * boxsize + boxsize - padding);
  canvas.lineTo(j * boxsize + boxsize - padding, i * boxsize + boxsize - padding);
  //right border
  canvas.moveTo(j * boxsize + boxsize - padding, i * boxsize + padding);
  canvas.lineTo(j * boxsize + boxsize - padding, i * boxsize + boxsize - padding);
  canvas.stroke();
}
