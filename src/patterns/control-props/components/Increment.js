import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { StyleButton } from "./styled";
import { useCounterContext } from "../useCounterContext";

const Increment = ({ iconProps = {} }) => {
  const { handleIncrement } = useCounterContext();
  return (
    <StyleButton onClick={handleIncrement}>
      <PlusOutlined {...iconProps} />
    </StyleButton>
  );
};

export { Increment };
