import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { newGame } from "./store/actions";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(newGame(5))}>Press me</button>
    </div>
  );
}

export default App;
