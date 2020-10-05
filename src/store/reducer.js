import { NEW_GAME, LEFT_CLICK, RIGHT_CLICK } from "./actions";
import { initGame, revealAll, revealEmpty } from "./helpers";

const initialState = [[]];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_GAME:
      const newBoard = initGame(payload);
      return [...newBoard];
    case LEFT_CLICK:
      state[payload.x][payload.y].isRevealed = true;
      const numOfMines = state.reduce((total, row) => {
        const rowMines = row.filter((cell) => cell.isMine).length;
        return total + rowMines;
      }, 0);
      //check for game over
      if (state[payload.x][payload.y].isMine) {
        return [...revealAll(state)];
      }

      const revealed = revealEmpty(payload.x, payload.y, state);
      const numUnRevealed = revealed.reduce((total, row) => {
        const rowUnRevealed = row.filter((cell) => !cell.isRevealed).length;
        return total + rowUnRevealed;
      }, 0);

      //check for win
      if (numOfMines === numUnRevealed) {
        return [...revealAll(state)];
      }

      return [...revealed];
    case RIGHT_CLICK:
      state[payload.x][payload.y].isFlagged = !state[payload.x][payload.y]
        .isFlagged;
      return [...state];
    default:
      return state;
  }
};
