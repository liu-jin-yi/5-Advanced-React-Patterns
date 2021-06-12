import React, { useEffect } from "react";
import Counter from "./Counter";
import useCounter from "./useCounter";

const Usage = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Decrement":
        return {
          count: Math.max(0, state.count - 2),
        };
      default:
        return useCounter.reducer(state, action);
    }
  };

  const { count, handleDecrement, handleIncrement } = useCounter(
    {
      initValue: 0,
      max: 20,
    },
    reducer
  );

  useEffect(() => {
    console.log("State Reducer 模式 -> count", count);
  }, [count]);

  return (
    <div>
      <h1>State Reducer 模式 用例五</h1>
      <Counter value={count}>
        <Counter.Increment onClick={handleIncrement} />
        <Counter.Count max={10} />
        <Counter.Decrement onClick={handleDecrement} />
      </Counter>
    </div>
  );
};

export default Usage;
