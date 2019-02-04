import React, { Component } from 'react';

class AddNewForm extends Component {

  state={
    imgValue: '',
    nameValue: '',
    houseValue: ''
  }

  handleImgChange = e => {
    this.setState({
      imgValue: e.target.value
    })
   console.log("image: " + this.state.imgValue)
  }

  handleNameChange = e => {
    this.setState({
      nameValue: e.target.value
    })
    console.log("name: " + this.state.nameValue)
  }

  handleHouseChange = e => {
    this.setState({
      houseValue: e.target.value
    })
    console.log("house: " + this.state.houseValue)
  }

  // submitHandler = e => {
  //   let obj = {
  //
  //   }
  //   e.preventDefault();
  // }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.submitHandler} className={this.props.className}>
          <div className="field">
            <label>Image URL</label>
              <input type="text" name="image1" placeholder="Image URL"  value={this.state.imgValue}
              onChange={this.handleImgChange}/>
          </div>
          <div className="field">
            <label>Full Name</label>
              <input type="text" name="full-name" placeholder="Full Name"
              value={this.state.nameValue}
              onChange={this.handleNameChange}/>
          </div>
          <div className="field">
            <label>House</label>
              <input type="text" name="house" placeholder="House"
              value={this.state.houseValue}
              onChange={this.handleHouseChange}/>
          </div>
          <input className="ui button" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}

export default AddNewForm;
