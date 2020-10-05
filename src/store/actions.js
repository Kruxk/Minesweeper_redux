//HELPER FUNTIONS
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

  const plant = (board) => {
    board[randomX][randomY].isMine = true;
    return board;
  };

  return mines === 0
    ? board
    : board[randomX][randomY].isMine
    ? plantMines(board, mines)
    : plantMines(plant(board), mines - 1);
};

const getArea = (x, y, board) => {
  const area = [];
  const dimension = board.length;
  //up
  if (x > 0) {
    area.push(board[x - 1][y]);
  }
  //down
  if (x < dimension - 1) {
    area.push(board[x + 1][y]);
  }
  //left
  if (y > 0) {
    area.push(board[x][y - 1]);
  }
  //right
  if (y < dimension - 1) {
    area.push(board[x][y + 1]);
  }
  //top left
  if (x > 0 && y > 0) {
    area.push(board[x - 1][y - 1]);
  }
  //top right
  if (x > 0 && y < dimension - 1) {
    area.push(board[x - 1][y + 1]);
  }
  //bottom right
  if (x < dimension - 1 && y < dimension - 1) {
    area.push(board[x + 1][y + 1]);
  }
  //bottom left
  if (x < dimension - 1 && y > 0) {
    area.push(board[x + 1][y - 1]);
  }
  return area;
};

const getNeighbours = (board) => {
  const updatedBoard = board.reduce((acc, curr, x) => {
    curr.map((cell, y) => {
      if (!cell.isMine) {
        const numOfMines = getArea(x, y, board).reduce((acc, curr) => {
          if (curr.isMine) {
            return acc + 1;
          }
          return acc;
        }, 0);

        cell.neighbours = numOfMines;
        return cell;
      }
      return cell;
    });
    return [...acc, curr];
  }, []);

  return updatedBoard;
};

//NON HELPER FUNCTIONS
export const NEW_GAME = "NEW_GAME";

export const newGame = (dimension) => {
  const numOfMines = Math.floor(dimension * dimension * 0.25);
  const board = getNeighbours(plantMines(initBoard(dimension), numOfMines));

  return { type: NEW_GAME, payload: board };
};
