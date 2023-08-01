const indexes: Record<string, Array<number>> = {
  "1": [0, 0],
  "2": [0, 1],
  "3": [0, 2],
  "4": [1, 0],
  "5": [1, 1],
  "6": [1, 2],
  "7": [2, 0],
  "8": [2, 1],
};

export function drawpart(canvas: CanvasRenderingContext2D, boxsize: number, padding: number, board: Array<Array<string>>, i: number, j: number, qrimg: HTMLImageElement) {
  let index = indexes[board[i][j]];
  let imgheight = qrimg.height;
  let imgwidth = qrimg.width;

  canvas.drawImage(
    qrimg,
    (index[1] * imgwidth) / 3,
    (index[0] * imgheight) / 3,
    imgwidth / 3,
    imgheight / 3,
    j * boxsize + padding,
    i * boxsize + padding,
    boxsize - padding - padding,
    boxsize - padding - padding
  );
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
