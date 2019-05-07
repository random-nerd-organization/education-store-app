import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <div className="input-list">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <p className="forgot-password">
              <a href="#">Forgot your password?</a>
            </p>
          </div>
          <button className="submit" type="submit">
            Log in
          </button>
        </form>
        <form>
          <div className="input-list">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
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
          </div>
          <button className="submit" type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
