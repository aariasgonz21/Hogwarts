import React from "react";
import CharacterCard from "../Components/CharacterCard";
import AddNewForm from "../Components/AddNewForm"

export default class CharacterContainer extends React.Component {

  state={
    showForm: true
  }

  showAddForm = e => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    let characters = this.props.characters.map(character => (
      <CharacterCard className="ui three column centered grid" key={character.id} character={character}/>
    ));


    return(
      <div>
        <button id="add-char-btn"className="ui button" onClick={this.showAddForm}>Add a Character</button>

        <AddNewForm className={this.state.showForm ? "ui form hidden" : "ui form"} />

        <div className="ui three centered column grid">
        {characters}
        </div>
      </div>
    )
  }
}
