import React from "react";
import Counter from "./Counter";

const Usage = () => {
  const handleChangeCount = (count) => {
    console.log("复合组件模式 -> count", count);
  };
  return (
    <div>
      <h1>复合组件模式 用例一</h1>
      <Counter onChange={handleChangeCount}>
        {/* 传递Props <Counter.Increment iconProps={{ spin: true }} /> */}
        <Counter.Increment />
        <Counter.Count max={10} />
        <Counter.Decrement />
      </Counter>
    </div>
  );
};

export default Usage;
