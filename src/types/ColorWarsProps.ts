import { Dispatch, SetStateAction } from "react";

export interface CanvasProps {
  screen: Array<Array<string>>;
  scale: number;
}
export interface LeaderboardProps {
  screen: Array<Array<string>>;
}
export interface WarProps {
  colorCount: 2 | 4 | 8;
  canvasSize: 64 | 128 | 256;
}
export interface ConfigureProps {
  setCount: Dispatch<SetStateAction<any>>;
  setDimension: Dispatch<SetStateAction<any>>;
  setChangeScreen: Dispatch<SetStateAction<boolean>>;
}
export interface ConfigureItemProps {
  active: 2 | 4 | 8 | 64 | 128 | 256;
  setActive: Dispatch<SetStateAction<any>>;
  str: string;
  value: 2 | 4 | 8 | 64 | 128 | 256;
}
