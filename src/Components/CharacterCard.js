import React from "react";
import House from "./House"

class CharacterCard extends React.Component {
  state={
    showForm: true,
    value: 'Gryffindor',
    house: this.props.character.house
  }



  showForm = e => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
     this.setState({
       house: this.state.value
     })
    console.log(this.state.value)
    e.preventDefault();
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
    <span className="header">{this.props.character.name}</span>
    <div className="meta">
      <a onClick={this.showForm} className="date">{this.state.house}</a>
    </div>
  </div>

  <div className={this.state.showForm ? 'extra content hidden':'extra content'}>
    <form onSubmit={this.handleSubmit}>
      <label>
      Edit House:
        <select
        value={this.state.value}
        onChange={this.handleChange}
        className="ui dropdown">
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>

  </div>
  </div>
</div>
    )
  }
}

export default CharacterCard;
