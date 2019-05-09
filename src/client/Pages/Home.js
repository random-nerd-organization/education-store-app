import React, { Component } from "react";
import "./Home.css";
import Form from "../Components/Form";


export default class Home extends Component {
  render() {
    return (
      <main>
        <section>
          <div className="welcome">
            <div className="text">ReSize Design</div>
            <div className="link-container">
              <div className="link">Women Clothes</div>
              <div className="link">Men Clothes</div>
            </div>
          </div>
        </section>
        <Form />
        <footer />
      </main>
    );
  }
}
