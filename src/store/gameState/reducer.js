import { LOST, STARTED, WON } from "./actions";

const initialState = ["No Game Started"];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOST:
      return [payload];
    case WON:
      return [payload];
    case STARTED:
      return [payload];
    default:
      return state;
  }
};
