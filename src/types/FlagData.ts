export interface FlagData {
  options: Array<Option>;
}

export interface Option {
  flag: FlagDataRaw;
  correct: boolean;
}

export interface FlagDataRaw {
  name: string;
  link: string;
}
