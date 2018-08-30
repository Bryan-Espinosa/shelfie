import React, { Component } from "react";
import Dashboard from "./component/Dashbord";

import Form from "./component/Form";
import Header from "./component/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: "wrench",
          price: 12,
          img:
            "https://static.grainger.com/rp/s/is/image/Grainger/19ZA63_AS01?$mdmain$"
        },
        {
          name: "Hammer",
          price: 10,
          img:
            "https://static.grainger.com/rp/s/is/image/Grainger/6DWH8_AS02?$mdmain$"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
