import React, { Component } from "react";
import "./Home.css";


export default class Home extends Component {
  async componentDidMount() {
    const res = await fetch('/api/products/top20');
    const productsTop20 = await res.json();
    console.log(productsTop20);
  }

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
        <footer />
      </main>
    );
  }
}
