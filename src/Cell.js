import React from "react";

export default function Cell({ isRevealed, isMine, neighbours }) {
  console.log(isRevealed, isMine, neighbours);

  return isRevealed ? (
    <div className="cell">{""}</div>
  ) : !isMine ? (
    <div className="cell">{neighbours > 0 ? neighbours : null}</div>
  ) : (
    <div className="cell">💣</div>
  );
}
