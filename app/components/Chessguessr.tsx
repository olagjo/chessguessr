import { useEffect } from "react";
import useChessguessr from "../hooks/useChessguessr";
import { Chessboard } from "react-chessboard";
import { Grid } from "./Grid";
import styled from "styled-components";
import Modal from "./Modal/Modal";
import { Game, GameStatus } from "~/utils/types";
import { useWindowSize } from "~/hooks/useWindowSize";
import TutorialModal from "./TutorialModal";
import { useHotkeys } from "react-hotkeys-hook";
import Countdown from "react-countdown";
import { countdownRenderer, midnightUtcTomorrow } from "~/utils/utils";
import useCopyToClipboard from "~/hooks/useCopyToClipboard";

const ChessboardWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 1rem;

  touch-action: manipulation;
`;

const Game = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Buttons = styled.div`
  display: flex;

  justify-content: center;

  touch-action: manipulation;
`;

const BoardWrapper = styled.div``;

const Players = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
`;

export const Chessguessr = ({
  game,
  stats,
  showModal,
  setShowModal,
  showTutorial,
  setShowTutorial,
  setTutorial,
  shouldUpdateStats,
}: {
  game: Game;
  stats?: any;
  showModal: boolean;
  setShowModal: any;
  showTutorial: boolean;
  setShowTutorial: any;
  setTutorial: any;
  shouldUpdateStats: boolean;
}) => {
  const {
    currentGuess,
    onDrop,
    position,
    takeback,
    submitGuess,
    guesses,
    turn,
    insufficientMoves,
    playerStats,
    gameStatus,
    colorToPlay,
    fenHistory,
  } = useChessguessr(game, shouldUpdateStats);

  const size = useWindowSize();

  const { white, black, wRating, bRating, wTitle, bTitle, wAka, bAka } = game;

  useEffect(() => {
    if (gameStatus !== GameStatus.IN_PROGRESS) {
      setTimeout(function () {
        setShowModal(true);
      }, 1000);
    } else {
      setShowModal(false);
    }
  }, [gameStatus]);

  const getBoardWidth = () => {
    let width = 560;

    if (size.width < 581) width = 370;
    if (size.width < 451) width = 310;

    return width;
  };

  const [linkValue, copy] = useCopyToClipboard();

  const nextDate = midnightUtcTomorrow();

  useHotkeys("Backspace", takeback, [currentGuess, fenHistory]);
  useHotkeys("Enter", submitGuess, [currentGuess]);

  return (
    <div>
      <div>
        <Modal
          gameStatus={gameStatus}
          game={game}
          turn={turn}
          showModal={showModal}
          setShowModal={setShowModal}
          guesses={guesses}
          playerStats={playerStats}
          puzzleStats={stats}
          shouldUpdateStats={shouldUpdateStats}
        />
        <TutorialModal
          showTutorial={showTutorial}
          setShowTutorial={setShowTutorial}
          setTutorial={setTutorial}
        />
      </div>
      <Game>
        <BoardWrapper>
          <Players>
            <p className="sm:text-lg lg:text-2xl mb-4 font-semibold text-center">
              {wTitle && (
                <span className="text-secondary-content">{wTitle}</span>
              )}{" "}
              {white} ({wRating}) –{" "}
              {bTitle && (
                <span className="text-secondary-content">{bTitle}</span>
              )}{" "}
               {black} ({bRating})
            </p>
            {position && (
              <>
                {gameStatus === GameStatus.IN_PROGRESS || !shouldUpdateStats ? (
                  <p className="sm:text-lg lg:text-md mb-4 font-semibold text-center">
                    {colorToPlay === "b" ? "Black" : "White"} to play
                  </p>
                ) : (
                  <p className="sm:text-lg lg:text-md mb-4 font-semibold text-center">
                    New game in{" "}
                    <Countdown
                      date={nextDate}
                      zeroPadTime={2}
                      renderer={countdownRenderer}
                    />
                  </p>
                )}
              </>
            )}
          </Players>

          <ChessboardWrapper>
            {position && (
              <Chessboard
                arePiecesDraggable={
                  currentGuess.length < 5 &&
                  gameStatus === GameStatus.IN_PROGRESS
                }
                position={position.fen()}
                onPieceDrop={onDrop}
                areArrowsAllowed={true}
                boardWidth={getBoardWidth()}
                boardOrientation={colorToPlay === "b" ? "black" : "white"}
                customArrowColor={"rgba(98, 155, 35, 0.9)"}
              />
            )}
          </ChessboardWrapper>
          <Buttons>
            <button
              className="py-2 px-4 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-accent-focus focus:outline-none focus:ring-opacity-75 mr-2 mb-4"
              onClick={takeback}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
              </svg>
              Undo last move
            </button>

            <button
              className="py-2 px-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-opacity-75 ml-2 mb-4"
              onClick={submitGuess}
            >
              Submit
            </button>
          </Buttons>
        </BoardWrapper>
        <div className="flex flex-col">
          <Grid
            currentGuess={currentGuess}
            guesses={guesses}
            turn={turn}
            insufficientMoves={insufficientMoves}
          />
          <div className="flex flex-row justify-end">
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs mt-2 mr-1 w-56"
              readOnly={true}
              value={"https://chessguessr.com/games/" + game.id}
              onFocus={(event) => event.target.select()}
            />
            <button
              className="btn btn-square btn-sm bg-primary border-primary mt-2"
              onClick={() => copy("https://chessguessr.com/games/" + game.id)}
            >
              {linkValue ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Game>
    </div>
  );
};
