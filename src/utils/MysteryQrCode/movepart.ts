import { NavigateFunction } from "react-router-dom";
import { checkresult } from "./checkresult";

export function movepart(
  canvasSize: number,
  board: Array<Array<string>>,
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>,
  e: React.MouseEvent,
  navigate: NavigateFunction
) {
  let boxsize: number = canvasSize / 3;

  //get x and y
  let targetElem: HTMLCanvasElement = e.target as HTMLCanvasElement;
  let x: number = e.pageX - targetElem.offsetLeft;
  let y: number = e.pageY - targetElem.offsetTop;

  //get i and j
  let i: number = Math.trunc(y / boxsize);
  let j: number = Math.trunc(x / boxsize);

  let tempboard = [[...board[0]], [...board[1]], [...board[2]]];

  let update = false;
  //check if valid
  if (i + 1 < 3 && board[i + 1][j] === "") {
    tempboard[i][j] = "";
    tempboard[i + 1][j] = board[i][j];
    update = true;
  } else if (i - 1 >= 0 && board[i - 1][j] === "") {
    tempboard[i][j] = "";
    tempboard[i - 1][j] = board[i][j];
    update = true;
  } else if (j + 1 < 3 && board[i][j + 1] === "") {
    tempboard[i][j] = "";
    tempboard[i][j + 1] = board[i][j];
    update = true;
  } else if (j - 1 >= 0 && board[i][j - 1] === "") {
    tempboard[i][j] = "";
    tempboard[i][j - 1] = board[i][j];
    update = true;
  }
  if (update) {
    setBoard(tempboard);
  }

  if (checkresult(tempboard)) {
    navigate("/mysteryqrcode/secret");
  }
}
