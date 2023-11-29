export function possibleOptions(length: number): Array<number> {
  const returnArr: Array<number> = [];
  const toStr = length.toString();
  for (let i = 1; i <= 4; i++) {
    const lastDigit = Number(toStr[toStr.length - 1]);
    if (lastDigit + i < 10) {
      const ret = toStr.split("");
      ret[toStr.length - 1] = (lastDigit + i).toString();
      returnArr.push(Number(ret.join("")));
    }
    if (lastDigit - i > 0) {
      const ret = toStr.split("");
      ret[toStr.length - 1] = (lastDigit - i).toString();
      returnArr.push(Number(ret.join("")));
    }
  }
  return returnArr;
}

export function getOptions(length: number): Array<number> {
  const returnArr: Array<number> = [length];
  let possOpts: Array<number> = possibleOptions(length);
  for (let i = 0; i < 3; i++) {
    let ran = Math.floor(Math.random() * possOpts.length);
    returnArr.push(possOpts[ran]);
    possOpts.splice(ran, 1);
  }
  console.log(returnArr);

  return shuffleOptions(returnArr);
}

export function shuffleOptions(arr: Array<number>): Array<number> {
  const returnArr: Array<number> = [];
  let arrLen: number = arr.length;
  for (let i = 0; i < arrLen; i++) {
    let ran = Math.floor(Math.random() * arr.length);
    returnArr.push(arr[ran]);
    arr.splice(ran, 1);
  }
  return returnArr;
}
