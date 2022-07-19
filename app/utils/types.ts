export type Game = {
  date: string;
  fen: string;
  solution: string[];
  gameUrl: string;
  white: string;
  black: string;
  wRating: number;
  bRating: number;
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
