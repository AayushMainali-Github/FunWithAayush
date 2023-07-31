//generates an array of unique numbers
export function genUniqueRanNum(
  lowerLimit: number,
  upperLimit: number,
  count: number,
  exclude: Array<number>
): Array<number> {
  //get numbers
  let numArr: Array<number> = genArr(lowerLimit, upperLimit, exclude);

  //check if it is possible to generate enough numbers
  if (numArr.length < count)
    throw new Error(`${count} random numbers cannot be generated in the current circumstances.`);

  //generate array
  let returnArr: Array<number> = [];
  for (let i = 0; i < count; i++) {
    let ranIndex = genRanNum(0, numArr.length - 1);
    returnArr.push(numArr[ranIndex]);
    numArr.splice(ranIndex, 1);
  }

  return returnArr;
}

//generate a random number
export function genRanNum(lowerLimit: number, upperLimit: number): number {
  //check if lowerlimit is smaller
  if (upperLimit < lowerLimit) throw new Error(`Upperlimit should not be smaller than lowerlimit.`);

  //generate number
  let ranNum: number = lowerLimit + Math.floor(Math.random() * (upperLimit - lowerLimit + 1));
  return ranNum;
}

//generates array with lowerlimit and upperlimit
export function genArr(lowerLimit: number, upperLimit: number, exclude: Array<number>): Array<number> {
  //check if lowerlimit is smaller
  if (upperLimit < lowerLimit) throw new Error(`Upperlimit should not be smaller than lowerlimit.`);

  //check is the exclude array is valid
  exclude.forEach((e) => {
    if (e < lowerLimit || e > upperLimit)
      throw new Error(`The exclude array must have numbers between the upper and lower limits`);
  });

  //generate array
  let returnArray: Array<number> = [];
  for (let i = lowerLimit; i <= upperLimit; i++) {
    if (!exclude.includes(i)) returnArray.push(i);
  }

  return returnArray;
}
