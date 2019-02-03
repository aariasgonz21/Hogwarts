import React from "react";
import CharacterCard from "../Components/CharacterCard";

export default class CharacterContainer extends React.Component {

  render() {
    let characters = this.props.characters.map(character => (
      <CharacterCard className="ui three column centered grid" key={character.id} character={character}/>
    ));


    return(
      <div>
        <button id="add-char-btn"className="ui button">Add a Character</button>
        <div className="ui three centered column grid">
        {characters}
        </div>
      </div>
    )
  }
}
