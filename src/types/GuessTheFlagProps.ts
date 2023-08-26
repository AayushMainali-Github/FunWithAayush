import { FlagData } from "./FlagData";

export interface GuessProps {
  flagData: FlagData;
  update: (correct: boolean) => void;
  score: number;
  totalFlags: number;
}

export interface LostProps {
  score: number;
  totalFlags: number;
  playagain: () => void;
}

export interface WonProps {
  totalFlags: number;
  playagain: () => void;
}
