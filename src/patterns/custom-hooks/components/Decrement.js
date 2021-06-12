import React from "react";
import { MinusOutlined } from "@ant-design/icons";
import { StyleButton } from "./styled";

const Decrement = ({ iconProps = {}, onClick }) => {
  return (
    <StyleButton onClick={onClick}>
      <MinusOutlined {...iconProps} />
    </StyleButton>
  );
};

export { Decrement };
