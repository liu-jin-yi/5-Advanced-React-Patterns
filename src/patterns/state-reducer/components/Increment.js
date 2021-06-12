import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { StyleButton } from "./styled";

const Increment = ({ iconProps = {}, onClick, ...props }) => {
  return (
    <StyleButton onClick={onClick} {...props}>
      <PlusOutlined {...iconProps} />
    </StyleButton>
  );
};

export { Increment };
