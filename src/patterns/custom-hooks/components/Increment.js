import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { StyleButton } from "./styled";

const Increment = ({ iconProps = {}, onClick }) => {
  return (
    <StyleButton onClick={onClick}>
      <PlusOutlined {...iconProps} />
    </StyleButton>
  );
};

export { Increment };
