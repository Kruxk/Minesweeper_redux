import { gameLost, gameStarted, gameWon } from "../gameState/actions";
import { revealEmpty } from "./helpers";

export const NEW_GAME = "NEW_GAME";
export const REVEAL = "REVEAL";
export const REVEAL_ALL = "REVEAL_ALL";
export const RIGHT_CLICK = "RIGHT_CLICK";

export const newGame = (dimension) => (dispatch, getState) => {
  dispatch(gameStarted());
  dispatch({ type: NEW_GAME, payload: dimension });
};

export const leftClick = (x, y) => (dispatch, getState) => {
  const { board } = getState();
  const numOfMines = board.reduce((total, row) => {
    const rowMines = row.filter((cell) => cell.isMine).length;
    return total + rowMines;
  }, 0);
  const numUnRevealed = revealEmpty(x, y, board).reduce((total, row) => {
    const rowUnRevealed = row.filter((cell) => !cell.isRevealed).length;
    return total + rowUnRevealed;
  }, 0);

  if (board[x][y].isMine) {
    dispatch({ type: REVEAL_ALL, payload: { x, y, hit: true } });
    dispatch(gameLost());
  }

  if (numOfMines === numUnRevealed - 1) {
    dispatch({ type: REVEAL_ALL, payload: { hit: false } });
    dispatch(gameWon());
  }

  dispatch({ type: REVEAL, payload: { x, y } });
};

export const rightClick = (x, y) => ({ type: RIGHT_CLICK, payload: { x, y } });
