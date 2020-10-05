import { combineReducers } from "redux";
import board from "./board/reducer";
import gameState from "./gameState/reducer";

export default combineReducers({
  board,
  gameState,
});
