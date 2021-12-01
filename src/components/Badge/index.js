import React from "react";
import { BadgeContainer, Type } from "./styled";
import Icon, { IconNames } from "../Icons";

const Badge = ({ type }) => {
  return (
  <BadgeContainer type={type}>
    {/* Check new svg icons */}
    <Icon name={ IconNames.electric } color={"blue"} />
    <Type>{type}</Type>
  </BadgeContainer>
)}


export default Badge