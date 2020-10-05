import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { newGame, revealEmpty } from "./store/actions";
import { getBoard } from "./store/selectors";
import Cell from "./Cell";

function App() {
  const dispatch = useDispatch();
  const selectBoard = useSelector(getBoard);

  return (
    <div className="App">
      <button onClick={() => dispatch(newGame(5))}>Press me</button>
      <div className="board">
        {selectBoard.map((row, x) => (
          <div key={x} className="row">
            {row.map((cell, y) => (
              <Cell key={`${x}${y}`} {...cell} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
