import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newGame } from "../actions";
import { getGameState, getMines } from "../selectors";

export default function Menu() {
  const gameState = useSelector(getGameState);
  const numOfMines = useSelector(getMines);
  const [dimension, setDimension] = useState(5);
  const dispatch = useDispatch();
  console.log(numOfMines);
  return (
    <div className="menu">
      <p>{gameState}</p>
      <p>Mines: {numOfMines}</p>
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
