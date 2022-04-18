import React from "react";
import { Items } from "../styles/styles";
let color, background, transform, pr, pl;
const CardItem = ({ item }) => {
  if (item === "New!") {
    color = "#effafa";
    background = "#5ba4a4";
    transform = "uppercase";
    pl ="6px"
    pr="6px"
  } else if (item === "Featured") {
    color = "#effafa";
    background = "#000000";
    transform = "uppercase";
    pl ="6px"
    pr="6px"
  } else {
    color = "#5ba4a4";
    background = "#ffffff";
    transform = "none";
    pl ="6px"
    pr="6px"
  }
  return (
    <>
      <Items
        fontColor={color}
        backGround={background}
        textTransform={transform}
        paddingLeft={pl}
        paddingRight={pr}
      >
        {item}
      </Items>
    </>
  );
};

export default CardItem;
