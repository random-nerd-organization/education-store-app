import React, { Component } from "react";
import Home from "./Pages/Home";
import "./general-styles.css";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    console.log('App did mount');
  }

  render() {
    return (
        <Home />
    );
  }
}
