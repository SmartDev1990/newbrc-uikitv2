import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" {...props}>
        <image width="32" height="32" href="/images/logo/logo.png"/>
    </Svg>
  );
};

export default Icon;
