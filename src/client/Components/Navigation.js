import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { Form } from "./Form";

export default class Navigation extends Component {

    render() {
        return (
            <nav>
                <div className="nav-list">
                    <div className="nav-logo">
                        <Link to="/home">ReSize</Link>
                    </div>
                    <div className="nav-item">Men</div>
                    <div className="nav-item">Women</div>
                    <div className="nav-item">Sales</div>
                    <div className="nav-item">Profile</div>
                    
                    {/* Test link */}
                    <div className="nav-item">
                        <Link to="/products">PRODUCTS TEST KINK</Link>
                    </div>
                </div>
                <div className="nav-list">
                    <div className="nav-item"> Cart </div>
                    <div className="nav-item"> My Account </div>
                </div>
            </nav>
        );
    }
}
