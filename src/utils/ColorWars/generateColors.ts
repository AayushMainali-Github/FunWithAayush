export default function generateColors(size: 2 | 4 | 8): Array<string> {
  let colors = ["#FF0800", "#FF4F00", "#964B00", "#FDEE00", "#66FF00", "#0FFFFF", "#8A2BE2", "#FF1DCE"];
  let retColors: Array<string> = [];
  for (let i = 0; i < size; i++) {
    const ranNum = Math.floor(Math.random() * colors.length);
    retColors.push(colors[ranNum]);
    colors.splice(ranNum, 1);
  }
  return retColors;
}
