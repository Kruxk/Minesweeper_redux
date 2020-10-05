import { NEW_GAME, REVEAL, REVEAL_ALL, RIGHT_CLICK } from "./actions";
import { initGame, revealAll, revealEmpty } from "./helpers";

const initialState = [[]];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_GAME:
      const newBoard = initGame(payload);
      return [...newBoard];
    case REVEAL:
      state[payload.x][payload.y].isRevealed = true;
      const revealed = revealEmpty(payload.x, payload.y, state);

      return [...revealed];
    case REVEAL_ALL:
      if (payload.hit) {
        state[payload.x][payload.y].isHit = true;
      }
      return [...revealAll(state)];
    case RIGHT_CLICK:
      state[payload.x][payload.y].isFlagged = !state[payload.x][payload.y]
        .isFlagged;
      return [...state];
    default:
      return state;
  }
};
