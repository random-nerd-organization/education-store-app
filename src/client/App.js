import React, { Component } from "react";
import "./app.css";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    console.log('App did mount');
  }

  render() {
    return (
      <body>
        <nav>
          <div className="nav-item">Store</div>
          <div className="nav-item">Sales</div>
          <div className="nav-item"> About Us</div>
          <div className="nav-item">Your profile</div>
        </nav>
      </body>
    );
  }
}
