import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import "./general-styles.css";


export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    console.log('App did mount');
  }

  render() {
    return (
        <BrowserRouter>
          <div className="App"> 
            <Navigation />
            <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          </div>
        </BrowserRouter>
    );
  }
}
