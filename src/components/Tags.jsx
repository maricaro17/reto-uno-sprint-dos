import React from "react";
import { BtnTag, ContainerTag } from "../styles/styles";
import { ramdonId } from "../utils/generateRandomId";


const Tags = ({ role, level, lenguajes, tools }) => {
  const tags = [];
  if (role) {
    tags.push(<BtnTag key={ramdonId(8)}>{role}</BtnTag>);
  }

  if (level) {
    tags.push(<BtnTag key={ramdonId(8)}>{level}</BtnTag>);
  }

  if (lenguajes && lenguajes.length > 0) {
    lenguajes.map((item) =>
      tags.push(<BtnTag key={ramdonId(8)}>{item}</BtnTag>)
    );
  }

  if (tools && tools.length > 0) {
    tools.map((item) => tags.push(<BtnTag key={ramdonId(8)}>{item}</BtnTag>));
  }

  return (
    <ContainerTag>
      <>{tags}</>
    </ContainerTag>
  );
};
export default Tags;
