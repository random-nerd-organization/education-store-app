import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default class Navigation extends Component {

    render() {
        return ( 
            <nav>
                <div className="nav-list">
                    <div className="nav-logo"><Link to="/home">ReSize</Link></div>
                    <div className="nav-item">Men</div>
                    <div className="nav-item">Women</div>
                    <div className="nav-item">Sales</div>
                    <div className="nav-item">Profile</div>
                </div>
                <div className="nav-list">
                    <div className="nav-item"> Cart </div>
                    <div className="nav-item">Log in</div>
                    <div className="nav-item nav-login">Sign Up</div>
                </div>
            </nav>
        );
    }
}
 