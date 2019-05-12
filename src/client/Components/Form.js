import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchPage: false,
      showForm: 0 // 0 for no form, 1 for login, 2 for signup
    };
  }

  toggleEffect = () => {
    this.setState(state => ({ switchPage: !state.switchPage }));
  };

  toggleForm = (e, delay) => {
    this.toggleEffect();
    if(delay) {
      setTimeout(() => {
        this.setState(() => ({ showForm: e }));
      }, delay);
    } else if (e === 0 || e === 1 || e === 2) {
      this.setState(() => ({ showForm: e }));
    }
    
    console.log(e);
  };

  render() {
    let effectClassName = "";
    if (this.state.switchPage) {
      effectClassName = "translate-right";
    }

    let disablePointerEvents = "";
    if (this.state.switchPage) {
      disablePointerEvents = "disable-pointer-events";
    }

    let activeForm =
      this.state.switchPage ? "activeForm" : "";

    const LogIn = (
      <form>
        <div className="input-list">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <p className="forgot-password">
            <a href="#">Forgot your password?</a>
          </p>
          <button className="button" id="login" type="submit">
          Log in
        </button>
        </div>
        <div className="connect-with">
          <div className="border-text">OR CONNECT WITH</div>
          <button className="button facebook-button"> facebook </button>
          <button className="button google-button"> google </button>
        </div>
      </form>
    );

    const SignUp = (
      <form>
        <div className="input-list">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
          />
          <button className="button" type="submit">
          Sign up
        </button>
        </div>
        <div className="connect-with">
          <div className="border-text">OR CONNECT WITH</div>
          <button className="button facebook-button"> facebook </button>
          <button className="button google-button"> google </button>
        </div>
      </form>
    );

    let showForm =
      this.state.showForm === 1
        ? LogIn
        : this.state.showForm === 2
        ? SignUp
        : "";

    return (
      <div className="main-container">
        <img className="bg" src="https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg" />
        <div className="bg-overlay"></div>
        <button
          className={"back-icon-button " + effectClassName}
          onClick={() => {
            this.toggleForm(0, 400);
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <polyline
              fill="none"
              stroke="#FFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="20 3, 3 15, 20 27"
            />
          </svg>
        </button>

        <div className={"initial-screen " + disablePointerEvents}>
          <div className={"logo " + effectClassName}>
            <b>Re</b>Size
          </div>

          <div className="button-container">
            <div
              className={"button " + effectClassName}
              onClick={() => this.toggleForm(1)}
            >
              Log in
            </div>
            <div
              className={"button " + effectClassName}
              onClick={() => this.toggleForm(2)}
            >
              Sign up
            </div>
          </div>
        </div>
        <div className={"form-container " + activeForm}>{showForm}</div>
      </div>
    );
  }
}
