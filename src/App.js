import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { getBoard } from "./store/selectors";
import Cell from "./components/Cell";
import Menu from "./components/Menu";

function App() {
  const selectBoard = useSelector(getBoard);

  return (
    <div className="App">
      <br></br>
      <br></br>
      <Menu />
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
