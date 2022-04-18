import React from "react";
import Card from "../components/Card.jsx";
import { data } from "../utils/data.js";
const CardList = () => {
  return (
    <div className="ContainerList">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CardList;
