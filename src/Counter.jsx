import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/ducks/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div style={{backgroundColor: "black"}}>
      <div style={{margin: "10px"}}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
