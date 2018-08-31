import React, { Component } from "react";
import Product from "./Product";
import App from "../App";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Product />
        {this.props.list.map((items, index) => {
          return (
            <div key={index}>
              <p>{items.name}</p>
              <p>{items.price}</p>
              <img src={items.img} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
