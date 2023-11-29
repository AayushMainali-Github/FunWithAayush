export interface CanvasProps {
  hour: number;
  minute: number;
}

export interface GuessProps {
  update: (correct: boolean) => void;
  hour: number;
  minute: number;
  score: number;
}

export interface WonProps {
  score: number;
  playagain: () => void;
}

export interface LostProps {
  score: number;
  playagain: () => void;
}
