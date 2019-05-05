import React, { Component } from "react";
import Navigation from "../Components/Navigation";
import "./Home.css";

export default class Home extends Component {

    render() {
        return (
            <main>
                <header>
                    <Navigation />
                </header>
                <section>
                    <div className="welcome">

                        <div className="text">
                            ReSize Design
                        </div>
                        <div class="link-container">
                            <div className="link">
                                Women Clothes
                            </div>
                            <div className="link">
                                Men Clothes
                            </div>
                        </div>
                    </div>
                </section>
                <footer>

                </footer>
            </main>
        );
    }
}
