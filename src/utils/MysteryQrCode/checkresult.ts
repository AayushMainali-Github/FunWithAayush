export function checkresult(board: Array<Array<string>>): boolean {
  if (
    board[0][0] === '1' &&
    board[0][1] === '2' &&
    board[0][2] === '3' &&
    board[1][0] === '4' &&
    board[1][1] === '5' &&
    board[1][2] === '6' &&
    board[2][0] === '7' &&
    board[2][1] === '8'
  )
    return true;
  else return false;
}
