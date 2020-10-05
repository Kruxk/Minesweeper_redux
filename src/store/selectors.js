export const getBoard = (state) => state;
export const getFlagged = (state) =>
  state.reduce((total, row) => {
    const flaggedInRow = row.filter((cell) => cell.isFlagged).length;
    return total + flaggedInRow;
  }, 0);
export const getMines = (state) =>
  state.reduce((total, row) => {
    const minesInRow = row.filter((cell) => cell.isMine).length;
    return total + minesInRow;
  }, 0);
