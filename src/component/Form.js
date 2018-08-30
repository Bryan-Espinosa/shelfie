import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      img: ""
    };
  }
  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  handleCancelClick(e) {
    this.setState({ name: "", price: "", img: "" });
  }

  render() {
    return (
      <div>
        <input
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={this.handleInput}
        />
        <input
          name="price"
          value={this.state.price}
          placeholder="Price"
          onChange={this.handleInput}
        />
        <input
          name="img"
          value={this.state.img}
          placeholder="Image"
          onChange={this.handleInput}
        />
        <div>
          <button onClick={e => this.handleCancelClick(e)}>Cancel</button>
          <button>Add</button>
        </div>
      </div>
    );
  }
}
export default Form;
