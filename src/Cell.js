import React from "react";

export default function Cell({ isRevealed, isMine, neighbours }) {
  return !isRevealed ? (
    <div class="cell"></div>
  ) : !isMine ? (
    <div class="cell">{neighbours > 0 ? neighbours : ""}</div>
  ) : (
    <div class="cell">💣</div>
  );
}
