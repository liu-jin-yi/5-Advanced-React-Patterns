import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { CounterProvider } from "./useCounterContext";
import { Increment, Decrement, Count } from "./components/index.js";

const Counter = ({ children, onChange, value: count }) => {
  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(count);
    }
    firstMounded.current = false;
  }, [count, onChange]);

  return (
    <CounterProvider value={{ count }}>
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
