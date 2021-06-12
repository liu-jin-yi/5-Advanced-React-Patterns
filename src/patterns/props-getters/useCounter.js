import { useState } from "react";

// 依次调用传入的函数
const callFnsInSequence = (...fns) => (...args) =>
  fns.forEach((fn) => fn && fn(...args));

function useCounter({ initValue = 0, max }) {
  const [count, setCount] = useState(initValue);

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, max));
  };
  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  // Count props getters
  const getCountProps = ({ ...otherProps } = {}) => ({
    value: count,
    ...otherProps,
  });
  // Decrement Props getters
  const getDecrementProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(handleDecrement, onClick),
    ...otherProps,
  });

  //Increment Props getters
  const getIncrementProps = ({ onClick, ...otherProps }) => ({
    onClick: callFnsInSequence(handleIncrement, onClick),
    ...otherProps,
  });

  return {
    count,
    handleIncrement,
    handleDecrement,
    getCountProps,
    getDecrementProps,
    getIncrementProps,
  };
}

export default useCounter;
