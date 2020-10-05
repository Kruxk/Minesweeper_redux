export const WON = "WON";
export const LOST = "LOST";
export const STARTED = "STARTED";

export const gameWon = () => ({ type: WON, payload: "You Won" });
export const gameLost = () => ({ type: LOST, payload: "You Lost" });
export const gameStarted = () => ({ type: STARTED, payload: "Game Started" });
