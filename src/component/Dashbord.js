import React, { Component } from "react";
import Product from "./Product";

class Dashboard extends Component {
  render(props) {
    console.log(this.props.state);
    return (
      <div>
        {this.props.state.map((items, index) => {
          return <Product key={index} item={this.props.state[index]} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
