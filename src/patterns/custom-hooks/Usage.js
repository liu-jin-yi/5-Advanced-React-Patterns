import React, { useEffect } from "react";
import Counter from "./Counter";
import useCounter from "./useCounter";

const Usage = () => {
  const { count, handleDecrement, handleIncrement } = useCounter(0);
  useEffect(() => {
    console.log("自定义 Hooks 模式 -> count", count);
  }, [count]);
  return (
    <div>
      <h1>自定义 Hooks 模式 用例三</h1>
      <Counter value={count}>
        {/* 传递Props <Counter.Increment iconProps={{ spin: true }} /> */}
        <Counter.Increment onClick={handleIncrement} />
        <Counter.Count max={10} />
        <Counter.Decrement onClick={handleDecrement} />
      </Counter>
    </div>
  );
};

export default Usage;
