export default function war(screen: Array<Array<string>>, intensity: number): Array<Array<string>> {
  //create a temporary screen
  const tempScreen: Array<Array<string>> = [];
  for (let i = 0; i < screen.length; i++) {
    const subscreen: Array<string> = [];
    for (let j = 0; j < screen.length; j++) {
      subscreen.push(screen[i][j]);
    }
    tempScreen.push(subscreen);
  }

  //the actual war
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen.length; j++) {
      for (let k = 0; k < Math.floor(Math.random() * intensity); k++) {
        const index = randomIndex(i, j, screen, intensity);
        if (index) tempScreen[index[0]][index[1]] = screen[i][j];
      }
    }
  }
  return tempScreen;
}

function randomIndex(i: number, j: number, screen: Array<Array<string>>, intensity: number): Array<number> {
  const availableIndex: Array<Array<number>> = [];

  //check up and down
  if (i !== 0 && screen[i][j] !== screen[i - 1][j]) availableIndex.push([i - 1, j]);
  if (i + 1 !== screen.length && screen[i][j] !== screen[i + 1][j]) availableIndex.push([i + 1, j]);
  //check right and left
  if (j !== 0 && screen[i][j] !== screen[i][j - 1]) availableIndex.push([i, j - 1]);
  if (j + 1 !== screen.length && screen[i][j] !== screen[i][j + 1]) availableIndex.push([i, j + 1]);

  if (Math.floor(Math.random() * intensity) > intensity / 2) {
    //check up and down 2 pixel
    if (i > 1 && screen[i][j] !== screen[i - 2][j]) availableIndex.push([i - 2, j]);
    if (i + 2 < screen.length && screen[i][j] !== screen[i + 2][j]) availableIndex.push([i + 2, j]);
    //check right and left 2 pixel
    if (j > 1 && screen[i][j] !== screen[i][j - 2]) availableIndex.push([i, j - 2]);
    if (j + 2 < screen.length && screen[i][j] !== screen[i][j + 2]) availableIndex.push([i, j + 2]);

    //corners
    if (i !== 0 && j !== 0 && screen[i][j] !== screen[i - 1][j - 1]) availableIndex.push([i - 1, j - 1]);
    if (i + 1 !== screen.length && j + 1 !== screen.length && screen[i][j] !== screen[i + 1][j + 1]) availableIndex.push([i + 1, j + 1]);
    if (i !== 0 && j + 1 !== screen.length && screen[i][j] !== screen[i - 1][j + 1]) availableIndex.push([i - 1, j + 1]);
    if (i + 1 !== screen.length && j !== 0 && screen[i][j] !== screen[i + 1][j - 1]) availableIndex.push([i + 1, j - 1]);
  }
  return availableIndex[Math.floor(Math.random() * availableIndex.length)];
}
