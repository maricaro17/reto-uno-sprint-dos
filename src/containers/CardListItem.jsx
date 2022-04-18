import React from "react";
import CardItem from "../components/CardItem";
import { ContainerCardListItem } from "../styles/styles";
import { ramdonId } from "../utils/generateRandomId";

const CardListItem = ({ list }) => {
  return (
    <ContainerCardListItem>
      {list.map((element) => (
        <CardItem key={ramdonId(8)} item={element} />
      ))}
    </ContainerCardListItem>
  );
};

export default CardListItem;
