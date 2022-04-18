import styled from "styled-components";
import "../assets/css/font.css";

const ImgRound = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;

  @media only screen and (max-width: 375px) {
    width: 50px;
    height: 50px;
    position: absolute;
    margin-top: -32px;
  }
  @media only screen and (min-width: 375px) and (max-width: 414px) {
    width: 50px;
    height: 50px;
    position: absolute;
    margin-top: -32px;
  }
  @media only screen and (min-width: 414px) and (max-width: 540px) {
    width: 60px;
    height: 60px;
    position: absolute;
    margin-top: -50px;
  }
 
`;

const BtnTag = styled.button`
  background: var(--light-grayish-cyan-bg);
  border: none;
  color: var(--desaturated-dark-cyan);
  font-size: 15px;
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  padding: 8px;
  border-radius: 5px;
  margin: 5px;
  &:hover {
    background: var(--desaturated-dark-cyan);
    color: var(--light-grayish-cyan-bg);
    cursor: pointer;
  }
`;
const CardInfoTitle = styled.h1`
  color: black;
  font-size: 20px;
  padding-left: 6px;
  &:hover {
    color: var(--desaturated-dark-cyan);
    cursor: pointer;
  }
`;
const CardInfoSubtitle = styled.p`
  padding-left: 6px;
  color: gray;
`;
const Container = styled.div`
  display: flex;
  margin-left: 8px;
  box-shadow: 0px 8px 15px rgb(123 142 142 / 0.5);
  background-color: white;
  justify-content: space-between;
  width: 900px;
  margin: 0 auto;
  margin-bottom: 20px;

  &:hover {
    border-left: 5px solid var(--desaturated-dark-cyan);
    cursor: pointer;
  }

  @media only screen and (max-width: 375px) {
    width: 320px;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 375px) and (max-width: 414px) {
    width: 340px;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 414px) and (max-width: 540px) {
    width: 400px;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 540px) and (max-width: 768px) {
    width: 500px;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 768px) and (max-width: 950px) {
    width: 700px;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 950px) and (max-width: 990px) {
    width: 700px;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
`;
const ContainerTag = styled.div`
  align-items: center;
  display: flex;
  margin-right: 20px;

  @media only screen and (max-width: 375px) {
    flex-wrap: wrap;
    padding: 10px;
  }
  @media only screen and (min-width: 375px) and (max-width: 414px) {
    flex-wrap: wrap;
    padding: 10px;
  }
  @media only screen and (min-width: 414px) and (max-width: 540px) {
    flex-wrap: wrap;
    padding: 10px;
  }
  @media only screen and (min-width: 540px) and (max-width: 768px) {
    flex-wrap: wrap;
    padding: 16px;
  }
  @media only screen and (min-width: 768px) and (max-width: 950px) {
    flex-wrap: wrap;
    padding: 20px;
  }
`;

const ContainerImg = styled.div`
  margin: 16px;
  @media only screen and (max-width: 375px) {
    margin: 8px;
  }
  @media only screen and (min-width: 375px) and (max-width: 414px) {
    margin: 10px;
  }
  @media only screen and (min-width: 414px) and (max-width: 540px) {
    margin: 18px;
  }
`;

const ContainerImgWithInfo = styled.div`
  display: flex;
`;

const Items = styled.p`
  color: ${(props) => props.fontColor || "#5ba4a4"};
  background-color: ${(props) => props.backGround || "#ffffff"};
  text-transform: ${(props) => props.textTransform || "none"};
  padding-top: 4px;
  padding-left: ${(props) => props.paddingLeft || "0px"};
  padding-right: ${(props) => props.paddingRight || "0px"};
  width: fit-content;
  border-radius: 25px;
  margin-right: 5px;
  margin-top: 0;
  margin-bottom: 0;
  @media only screen and (max-width: 375px) {
    font-size: 14px;
  }

  @media only screen and (min-width: 414px) and (max-width: 540px) {
    margin-top: 10px;
  }
`;

const ContainerCardListItem = styled.div`
  display: flex;
  margin-top: 10px;
`;
const ContainerInfo = styled.div`
  padding-top: 20px;
  @media only screen and (max-width: 375px) {
    border-bottom: 1px solid var(--dark-grayish-cyan);
    width: 280px;
  }

  @media only screen and (min-width: 414px) and (max-width: 540px) {
    border-bottom: 1px solid var(--dark-grayish-cyan);
    width: 320px;
  }
`;

const ContainerHeader = styled.div`
  background-color: var(--desaturated-dark-cyan);
  background-image: url("https://res.cloudinary.com/dxvzsg7fa/image/upload/v1650232100/bookmark/sprint-2-reto-1/bg-header-desktop_rzaguj.svg");
  margin-bottom: 50px;
  width: 100%;
  height: 150px;
  @media only screen and (max-width: 375px) {
    background-image: url("https://res.cloudinary.com/dxvzsg7fa/image/upload/v1650232100/bookmark/sprint-2-reto-1/bg-header-mobile_q6gavh.svg");
  }

  @media only screen and (min-width: 414px) and (max-width: 540px) {
    background-image: url("https://res.cloudinary.com/dxvzsg7fa/image/upload/v1650232100/bookmark/sprint-2-reto-1/bg-header-desktop_rzaguj.svg");
  }
`;

const ContainerList = styled.div``;

export {
  BtnTag,
  ImgRound,
  CardInfoTitle,
  Container,
  ContainerTag,
  ContainerImg,
  ContainerImgWithInfo,
  Items,
  ContainerCardListItem,
  CardInfoSubtitle,
  ContainerInfo,
  ContainerHeader,
  ContainerList,
};
