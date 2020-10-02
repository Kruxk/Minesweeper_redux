export const NEW_GAME = "NEW_GAME";

const initBoard = (dimension) => {
  const board = [];
  for (let x = 0; x < dimension; x++) {
    board.push([]);
    for (let y = 0; y < dimension; y++) {
      board[x][y] = {
        isMine: false,
        isRevealed: false,
        neighbours: 0,
        isFlagged: false,
      };
    }
  }
  return board;
};

export const newGame = (dimension) => ({
  type: NEW_GAME,
  payload: initBoard(dimension),
});
