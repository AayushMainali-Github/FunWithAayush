import formatTime from "./formatTime";

export function possibleOptions(hour: number, minute: number): Array<string> {
  const returnArr: Array<string> = [];
  for (let i = 0; i <= 10; i += 5) {
    if (i !== 0) {
      if (minute + i < 60) returnArr.push(`${formatTime(hour)}:${formatTime(minute + i)}`);
      if (minute - i >= 0) returnArr.push(`${formatTime(hour)}:${formatTime(minute - i)}`);
    }
    if (hour !== 12) {
      if (minute + i < 60) returnArr.push(`${formatTime(hour + 1)}:${formatTime(minute + i)}`);
      if (minute - i >= 0) returnArr.push(`${formatTime(hour + 1)}:${formatTime(minute - i)}`);
    }
    if (hour !== 0) {
      if (minute + i < 60) returnArr.push(`${formatTime(hour - 1)}:${formatTime(minute + i)}`);
      if (minute - i >= 0) returnArr.push(`${formatTime(hour - 1)}:${formatTime(minute - i)}`);
    }
  }
  return returnArr;
}

export function getOptions(hour: number, minute: number): Array<string> {
  const returnArr: Array<string> = [`${formatTime(hour)}:${formatTime(minute)}`];
  let possOpts: Array<string> = possibleOptions(hour, minute);
  for (let i = 0; i < 3; i++) {
    let ran = Math.floor(Math.random() * possOpts.length);
    returnArr.push(possOpts[ran]);
    possOpts.splice(ran, 1);
  }
  console.log(returnArr);

  return shuffleOptions(returnArr);
}

export function shuffleOptions(arr: Array<string>): Array<string> {
  const returnArr: Array<string> = [];
  let arrLen: number = arr.length;
  for (let i = 0; i < arrLen; i++) {
    let ran = Math.floor(Math.random() * arr.length);
    returnArr.push(arr[ran]);
    arr.splice(ran, 1);
  }
  return returnArr;
}
