import React from "react";
import { useDispatch } from "react-redux";
import { leftClick } from "./store/actions";

export default function Cell({ isRevealed, isMine, neighbours, x, y }) {
  const dispatch = useDispatch();

  return !isRevealed ? (
    <div
      className="cell cellHidden"
      onClick={() => {
        dispatch(leftClick(x, y));
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
