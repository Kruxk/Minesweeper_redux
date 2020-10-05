export const NEW_GAME = "NEW_GAME";
export const LEFT_CLICK = "LEFT_CLICK";
export const RIGHT_CLICK = "RIGHT_CLICK";

export const newGame = (dimension) => ({ type: NEW_GAME, payload: dimension });

export const leftClick = (x, y) => ({ type: LEFT_CLICK, payload: { x, y } });

export const rightClick = (x, y) => ({ type: RIGHT_CLICK, payload: { x, y } });
