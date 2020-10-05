import React from "react";
import { useDispatch } from "react-redux";
import { leftClick, rightClick } from "../store/actions";

export default function Cell({
  isRevealed,
  isMine,
  neighbours,
  x,
  y,
  isFlagged,
}) {
  const dispatch = useDispatch();
  console.log(x, y);
  return isFlagged ? (
    <div
      className="cell cellHidden"
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(rightClick(x, y));
      }}
    >
      🚩
    </div>
  ) : !isRevealed ? (
    <div
      className="cell cellHidden"
      onClick={() => {
        dispatch(leftClick(x, y));
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(rightClick(x, y));
      }}
    >
      {""}
    </div>
  ) : !isMine ? (
    <div className="cell">{neighbours > 0 ? neighbours : null}</div>
  ) : (
    <div className="cell">💣</div>
  );
}
