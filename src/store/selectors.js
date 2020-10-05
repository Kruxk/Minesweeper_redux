export const getBoard = (state) => state.board;
export const getGameState = (state) => state.gameState;
export const getMines = (state) =>
  state.board.reduce((total, row) => {
    const minesInRow = row.filter((cell) => cell.isMine).length;
    return total + minesInRow;
  }, 0);
