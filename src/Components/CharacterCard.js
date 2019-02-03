import React from "react";
import House from "./House"

class CharacterCard extends React.Component {
  dropdown = () => {
    return `<div class="ui selection dropdown">
    <input type="hidden" name="house">
    <i class="dropdown icon"></i>
      <div class="default text"> Edit House</div>
      <div class="menu">
    <div class="item" data-value="1">Male</div>
    <div class="item" data-value="0">Female</div>
  </div>
</div>`
    // let houses = this.props.houses.map(house => (
    //
    // ))
  }
  render() {

    return(
    <div className="five wide column">
      <div>
      <div className="ui card">
  <div className="image">
    <img src={this.props.character.image1}/>
  </div>
  <div className="content">
    <a className="header">{this.props.character.name}</a>
    <div className="meta">
      <span className="date">{this.props.character.house}</span>
    </div>
  </div>
  <div className="extra content">
    {this.dropdown()}
  </div>
  </div>
      </div>
</div>
    )
  }
}

export default CharacterCard;
