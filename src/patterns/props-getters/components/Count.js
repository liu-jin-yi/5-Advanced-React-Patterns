import React from "react";
import styled from "styled-components";
import { useCounterContext } from "../useCounterContext";
const Count = ({ max }) => {
  const { count } = useCounterContext();
  const hasError = max ? count >= max : false;
  return <StyleCount hasError={hasError}>{count}</StyleCount>;
};

const StyleCount = styled.div`
  background-color: ${({ hasError }) => (hasError ? "#bd2130" : "transparent")};
  width: 56px;
  height: 32px;
  display: inline-block;
  line-height: 32px;
`;

export { Count };
