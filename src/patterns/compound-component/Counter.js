import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CounterProvider } from "./useCounterContext";
import { Increment, Decrement, Count } from "./components/index.js";

const Counter = ({ children, onChange }) => {
  const firstMounded = useRef(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(count);
    }
    firstMounded.current = false;
  }, [count, onChange]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(Math.max(0, count - 1));
  };

  return (
    <CounterProvider value={{ count, handleDecrement, handleIncrement }}>
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
