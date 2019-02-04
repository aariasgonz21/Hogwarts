import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  render() {
    let houseNames = this.props.houses.map(house => (<House key={house} house={house}/>));

    let characters = this.props.characters

    return(
      <div>
        <ul className="houseContainer">Houses</ul>
        <div>{houseNames}</div>
      </div>
    )
  }
}
