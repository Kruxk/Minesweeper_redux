export const getBoard = (state) => state;
export const getGameState = (state) => state[state.length - 1];
export const getMines = (state) =>
  state.board.reduce((total, row) => {
    const minesInRow = row.filter((cell) => cell.isMine).length;
    return total + minesInRow;
  }, 0);
