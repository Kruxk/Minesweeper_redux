import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newGame } from "../store/actions";
import { getFlagged, getMines } from "../store/selectors";

export default function Menu() {
  const [dimension, setDimension] = useState(5);
  const dispatch = useDispatch();
  const numOfMines = useSelector(getMines);
  const numOfFlagged = useSelector(getFlagged);

  return (
    <div className="menu">
      <p>Mines remaining: {numOfMines - numOfFlagged}</p>
      <label htmlFor="difficulty">Choose a difficulty:</label>
      <select
        name="difficulty"
        value={dimension}
        onChange={(e) => setDimension(parseInt(e.target.value))}
      >
        <option value={5}>5 X 5</option>
        <option value={10}>10 X 10</option>
        <option value={15}>15 X 15</option>
        <option value={20}>20 X 20</option>
        <option value={25}>25 X 25</option>
        <option value={30}>30 X 30</option>
      </select>
      <button onClick={() => dispatch(newGame(dimension))}>
        Start new game
      </button>
    </div>
  );
}
