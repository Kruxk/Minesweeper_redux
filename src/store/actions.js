export const NEW_GAME = "NEW_GAME";

const randomNum = (dimension) =>
  Math.floor(Math.random() * 1000000) % dimension;

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

const plantMines = (board, mines) => {
  const randomX = randomNum(board.length);
  const randomY = randomNum(board.length);

  if (!board[randomX][randomY].isMine && mines > 0) {
    board[randomX][randomY].isMine = true;
    return plantMines(board, mines - 1);
  } else if (mines === 0) {
    return board;
  } else {
    return plantMines(board, mines);
  }
};

export const newGame = (dimension) => {
  const numOfMines = Math.floor(dimension * dimension * 0.2);
  const board = plantMines(initBoard(dimension), numOfMines);

  return { type: NEW_GAME, payload: board };
};
