import React from "react";
import CharacterDetails from "./CharacterDetails"

const House = props => {

  return(
    <div className="house">
      <h1 className="houseNames ">{props.house}</h1>
      <div className="house-characters">
      <CharacterDetails />
      </div>
    </div>
  )
};

export default House;
