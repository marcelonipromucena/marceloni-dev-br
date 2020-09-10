import React from "react";

import { ButtonWrapper } from "./styles";

const Button = (props) => {
    console.log(props);
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

export default Button;
