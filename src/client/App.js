import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Notification from "./Components/Notification";
import Navigation from "./Components/Navigation";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Product from "./Pages/Product";

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
          <Notification />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/products/:id" component={Product} />
        </div>
      </BrowserRouter>
    );
  }
}
