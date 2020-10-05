import { NEW_GAME, LEFTCLICK, revealEmpty } from "./actions";

const revealAll = (board) => {
  return board.reduce((board, row) => {
    row.map((cell) => (cell.isRevealed = true));
    return [...board, row];
  }, []);
};

const initialState = {
  board: [[]],
  gameState: "No game currently",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_GAME:
      return { gameState: "Game Started", board: [...payload] };
    case LEFTCLICK:
      const { board } = state;
      board[payload.x][payload.y].isRevealed = true;
      const numOfMines = board.reduce((total, row) => {
        const rowMines = row.filter((cell) => cell.isMine).length;
        return total + rowMines;
      }, 0);
      //check for game over
      if (board[payload.x][payload.y].isMine) {
        return { gameState: "Game Over", board: [...revealAll(board)] };
      }

      const revealed = revealEmpty(payload.x, payload.y, board);
      const numUnRevealed = revealed.reduce((total, row) => {
        const rowUnRevealed = row.filter((cell) => !cell.isRevealed).length;
        return total + rowUnRevealed;
      }, 0);
      console.log("mines:", numOfMines, "revealed:", numUnRevealed);
      //check for win
      if (numOfMines === numUnRevealed) {
        return { gameState: "You Won", board: [...revealAll(board)] };
      }

      return { ...state, board: [...revealed] };
    default:
      return state;
  }
};
