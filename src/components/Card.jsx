import React from "react";
import Tags from "./Tags";
import CardInfo from "./CardInfo";
import { Container } from "../styles/styles.js";
import { ramdonId } from "../utils/generateRandomId";

const Card = ({ data }) => {
  return (
    <Container>
      <CardInfo
        image={data.image}
        itemPrincipal={data.itemPrincipal}
        profesion={data.profesion}
        fecha={data.fecha}
        time={data.time}
        localidad={data.localidad}
      />
      <Tags
        key={ramdonId(8)}
        role={data.role}
        level={data.level}
        lenguajes={data.lenguajes}
        tools={data.tools}
      />
    </Container>
  );
};
export default Card;
