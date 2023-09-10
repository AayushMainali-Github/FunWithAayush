import generateColors from "./generateColors";

export default function generateScreen(colorCount: 2 | 4 | 8, size: 16 | 32 | 64 | 128 | 256 | 512 ): Array<Array<string>> {
  let screen: Array<Array<string>> = [];
  const colors = generateColors(colorCount);

  //assign colors to each index
  for (let i = 0; i < size; i++) {
    let subScreen = [];
    for (let j = 0; j < size; j++) {
      subScreen.push(colors[Math.floor(j / (size / colorCount))]);
    }
    screen.push(subScreen);
  }
  return screen;
}
