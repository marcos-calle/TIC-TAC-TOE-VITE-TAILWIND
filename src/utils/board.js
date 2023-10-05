import { WINNER_COMBOS } from "../constants/boardConstants";

export const checkResult = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};
export const checkEndGame = (board) => {
  return board.every((s) => s !== null);
};
