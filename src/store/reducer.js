import { NEW_GAME } from "./actions";

const initialState = [[]];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_GAME:
      return [...payload];
    default:
      return state;
  }
};
