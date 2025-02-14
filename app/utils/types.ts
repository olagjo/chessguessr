export type Game = {
  date: string;
  fen: string;
  solution: string[];
  gameUrl: string;
  white: string;
  black: string;
  wAka?: string;
  bAka?: string;
  wTitle?: string;
  bTitle?: string;
  event?: string;
  wRating: number | string;
  bRating: number | string;
  id: number;
};

export type Guess = string[];

export interface GridProps {
  currentGuess: Guess;
  guesses: Guess[];
  turn: number;
  insufficientMoves: boolean;
}

export interface RowProps {
  guess: Guess;
  currentGuess: Guess;
  insufficientMoves: boolean;
}

export enum GameStatus {
  IN_PROGRESS = "IN_PROGRESS",
  SOLVED = "SOLVED",
  FAILED = "FAILED",
}
