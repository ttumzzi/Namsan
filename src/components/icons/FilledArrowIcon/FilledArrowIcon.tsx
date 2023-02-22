import React from "react";
import IconWrapper from "../IconWrapper";
import filledArrowUp from "../../../assets/imgs/ic_arrow_drop_up.png";
import filledArrowDown from "../../../assets/imgs/ic_arrow_drop_down.png";
import filledArrowLeft from "../../../assets/imgs/ic_arrow_drop_left.png";
import filledArrowRight from "../../../assets/imgs/ic_arrow_drop_right.png";

interface PropTypes {
  width?: string;
  height?: string;
  direction: "UP" | "DOWN" | "LEFT" | "RIGHT";
}

const FilledArrowIcon = (props: PropTypes) => {
  let src, alt;

  switch (props.direction) {
    case "UP":
      src = filledArrowUp;
      alt = "filled arrow up icon";
      break;
    case "DOWN":
      src = filledArrowDown;
      alt = "filled arrow down icon";
      break;
    case "LEFT":
      src = filledArrowLeft;
      alt = "filled arrow left icon";
      break;
    case "RIGHT":
      src = filledArrowRight;
      alt = "filled arrow right icon";
      break;
  }
  return (
    <IconWrapper width={props.width || "24px"} height={props.height || "24px"}>
      <img src={src} alt={src} />
    </IconWrapper>
  );
};

export default FilledArrowIcon;
