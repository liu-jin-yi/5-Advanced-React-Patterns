import React from "react";
import { MinusOutlined } from "@ant-design/icons";
import { StyleButton } from "./styled";
import { useCounterContext } from "../useCounterContext";

const Decrement = ({ iconProps = {} }) => {
  const { handleDecrement } = useCounterContext();
  return (
    <StyleButton onClick={handleDecrement}>
      <MinusOutlined {...iconProps} />
    </StyleButton>
  );
};

export { Decrement };
