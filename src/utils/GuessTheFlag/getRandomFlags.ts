import flags from '../../data/flags.json';
import { FlagData, Option } from '../../types/FlagData';
import { genRanNum, genUniqueRanNum } from './randomNumber';
export default function getRandomFlags(count: number, options: number): Array<FlagData> {
  //check if enough flags
  if (flags.length < count || flags.length < options + 1) throw new Error('Not enough flags');

  //generate flags
  let randomIndex: Array<number> = genUniqueRanNum(0, flags.length - 1, count, []);
  let randomFlags: Array<FlagData> = [];

  //generate each flag
  for (let i = 0; i < randomIndex.length; i++) {
    //generate each option
    let excludeArr: Array<number> = [randomIndex[i]];
    let optionsArr: Array<Option> = [
      {
        flag: flags[randomIndex[i]],
        correct: true,
      },
    ];
    for (let j = 1; j < options; j++) {
      let ranOptInd: number = genUniqueRanNum(0, flags.length - 1, 1, excludeArr)[0];
      excludeArr.push(ranOptInd);
      optionsArr.push({ flag: flags[ranOptInd], correct: false });
    }

    //shuffle
    let ranNumShuff: number = genRanNum(0, options - 1);
    let temp: Option = optionsArr[ranNumShuff];
    optionsArr[ranNumShuff] = optionsArr[0];
    optionsArr[0] = temp;

    //add the options
    randomFlags.push({ options: optionsArr });
  }

  return randomFlags;
}
