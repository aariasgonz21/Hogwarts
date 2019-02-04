import React, { Component } from 'react';
import CharacterCard from './CharacterCard'

class AddNewForm extends Component {

  state={
    name: '',
    age: '',
    house: '',
    role: '',
    image1: '',
    image2: ''
  }

changeHandler = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

  submitHandler = e => {
    // return(
    //  <CharacterCard key={}/>
    // )
    e.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.submitHandler} className={this.props.className}>

        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Full Name"
          value={this.state.name}
          onChange={this.changeHandler}/>
        </div>

        <div className="field">
          <label>Age</label>
          <input type="text" name="age" placeholder="age"
          value={this.state.age}
          onChange={this.changeHandler}/>
        </div>

        <div className="field">
          <label>House</label>
          <input type="text" name="house" placeholder="House"
          value={this.state.house}
          onChange={this.changeHandler}/>
        </div>

        <div className="field">
          <label>Role</label>
          <input type="text" name="role" placeholder="Role"
          value={this.state.role}
          onChange={this.changeHandler}/>
        </div>

          <div className="field">
            <label>Image1 URL</label>
              <input type="text" name="image1" placeholder="Image URL"  value={this.state.image1}
              onChange={this.changeHandler}/>
          </div>

          <div className="field">
            <label>Image2 URL</label>
              <input type="text" name="image2" placeholder="Image URL"  value={this.state.image2}
              onChange={this.changeHandler}/>
          </div>

          <input className="ui button" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}

export default AddNewForm;
