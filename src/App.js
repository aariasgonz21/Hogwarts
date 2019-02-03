import React, { Component } from "react";
import CharacterContainer from './Containers/CharacterContainer'
import HouseContainer from './Containers/HouseContainer'
import "./App.css";



class App extends Component {

  state = {
    characters: [],
    houses: []
  }

  componentDidMount(){
    const charURL = "http://localhost:3001/characters";
    const housesURL = "http://localhost:3001/houses"

    fetch(charURL)
    .then(res => res.json())
    .then(characters =>
      this.setState({
      characters: characters
    }))

    fetch(housesURL)
    .then(res => res.json())
    .then(houses => this.setState({
      houses: houses
    }))
  }

  render() {

    return (
      <div className="app">
      <h1 id="main-title">Hogwarts</h1>
      <img src="./line-breaker.svg" alt=''/>
        <CharacterContainer characters={this.state.characters}/>
        <img src="./line-breaker.svg" alt=''/>
        <HouseContainer houses={this.state.houses} />
      </div>
    );
  }
}

export default App;
