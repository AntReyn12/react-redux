import React from "react";
import {useSelector} from "react-redux";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux made easy!</h1>
        <h3>The count is: {count}</h3>
        <Counter />
      </header>
    </div>
  );
};

export default App;
