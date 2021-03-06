const randomNum = (dimension) =>
  Math.floor(Math.random() * 1000000) % dimension;

const initBoard = (dimension) =>
  [...new Array(dimension).keys()].map((_, x) =>
    [...new Array(dimension).keys()].map((_, y) => {
      return {
        x: x,
        y: y,
        isMine: false,
        isRevealed: false,
        neighbours: 0,
        isFlagged: false,
        isHit: false,
      };
    })
  );

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

export const revealEmpty = (x, y, board) => {
  const area = getArea(x, y, board);
  area.map((cell) => {
    if (!cell.isFlagged && !cell.isRevealed && !cell.isMine) {
      board[cell.x][cell.y].isRevealed = true;
      if (cell.neighbours === 0) {
        revealEmpty(cell.x, cell.y, board);
      }
    }
    return cell;
  });
  return board;
};

export const revealAll = (board) => {
  return board.reduce((board, row) => {
    row.map((cell) => {
      cell.isRevealed = true;
      cell.isFlagged = false;
      return cell;
    });
    return [...board, row];
  }, []);
};

export const initGame = (dimension) => {
  const numOfMines = Math.floor(dimension * dimension * 0.2);
  return getNeighbours(plantMines(initBoard(dimension), numOfMines));
};
