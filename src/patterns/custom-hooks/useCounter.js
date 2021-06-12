import { useState } from "react";

function useCounter(initValue = 0) {
  const [count, setCount] = useState(initValue);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };
  return { count, handleIncrement, handleDecrement };
}

export default useCounter;
