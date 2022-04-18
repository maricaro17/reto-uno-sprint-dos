import React from "react";
import { ContainerImg, ImgRound } from "../styles/styles.js";
const ImagesRound = ({img}) => {
    return(
        <ContainerImg>
            <ImgRound src={img} alt="example"/>
        </ContainerImg>
    )
} 
export default ImagesRound