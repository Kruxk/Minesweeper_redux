import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "./store/selectors";
import Cell from "./store/components/Cell";
import Menu from "./store/components/Menu";

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
