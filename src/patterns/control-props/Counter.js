import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CounterProvider } from "./useCounterContext";
import { Increment, Decrement, Count } from "./components/index.js";

const Counter = ({ children, onChange, value = null, initValue = 0 }) => {
  const [count, setCount] = useState(initValue);
  // 是否被控制，也就是说是否传递了props
  const isControlled = value !== null && !!onChange;
  const getCount = () => (isControlled ? value : count);
  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current && !isControlled) {
      onChange && onChange(count);
    }
    firstMounded.current = false;
  }, [count, onChange, isControlled]);

  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };
  const handleDecrement = () => {
    handleCountChange(Math.max(0, getCount() - 1));
  };
  const handleCountChange = (newValue) =>
    isControlled ? onChange(newValue) : setCount(newValue);

  return (
    <CounterProvider
      value={{ count: getCount(), handleDecrement, handleIncrement }}
    >
      <CounterContainer>{children}</CounterContainer>
    </CounterProvider>
  );
};

const CounterContainer = styled.div`
  width: 120px;
  height: 32px;
  opacity: 1;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: inline-block;
  overflow: hidden;
`;

Counter.Increment = Increment;
Counter.Decrement = Decrement;
Counter.Count = Count;
export default Counter;
