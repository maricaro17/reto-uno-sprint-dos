import React from "react";
import CardListItem from "../containers/CardListItem";
import { CardInfoSubtitle, CardInfoTitle, ContainerImgWithInfo, ContainerInfo } from "../styles/styles";
import { ramdonId } from "../utils/generateRandomId";
import ImagesRound from "./ImagesRound";


const CardInfo = ({ profesion, time, localidad, fecha, itemPrincipal, image }) => {
  return (
    <ContainerImgWithInfo>
      <ImagesRound img={image}/>
      <ContainerInfo>
        <CardListItem key={ramdonId(8)} list={itemPrincipal}/>
        <CardInfoTitle>{profesion}</CardInfoTitle>
        <CardInfoSubtitle>{fecha} - {time} - {localidad}</CardInfoSubtitle>
      </ContainerInfo>
    </ContainerImgWithInfo>
  );
};

export default CardInfo;
