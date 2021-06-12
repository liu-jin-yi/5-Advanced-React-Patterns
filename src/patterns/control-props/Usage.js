import React, { useState } from "react";
import Counter from "./Counter";

const Usage = () => {
  const [count, setCount] = useState(0);
  const handleChangeCount = (count) => {
    console.log("Props 控制模式 -> count", count);
    setCount(count);
  };
  return (
    <div>
      <h1>Props 控制模式 用例二</h1>
      <Counter onChange={handleChangeCount} value={count}>
        {/* 传递Props <Counter.Increment iconProps={{ spin: true }} /> */}
        <Counter.Increment />
        <Counter.Count max={10} />
        <Counter.Decrement />
      </Counter>
    </div>
  );
};

export default Usage;
