import React from "react";
import { MinusOutlined } from "@ant-design/icons";
import { StyleButton } from "./styled";

const Decrement = ({ iconProps = {}, onClick, ...props }) => {
  return (
    <StyleButton onClick={onClick} {...props}>
      <MinusOutlined {...iconProps} />
    </StyleButton>
  );
};

export { Decrement };
