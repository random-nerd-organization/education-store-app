import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Products.css";

export default class Products extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    async componentDidMount() {
        const res = await fetch('/api/products');
        const products = await res.json();
        this.setState({ data: products })
    }

    render() {
        return (
            <main>
                <h1>Products Page</h1>
                <div id="products-wrapper">
                    {
                        this.state.data.map(p => (
                            <Link to={`/products/${p._id.toString()}`}>
                                <div >
                                    <p>
                                        <strong>Title: </strong>
                                        {p.title}
                                    </p>
                                    <p>
                                        <strong>Description: </strong>
                                        {p.description}
                                    </p>
                                    <p>
                                        <strong>InStock: </strong>
                                        {p.inStock}
                                    </p>
                                    <p>
                                        <strong>ProductSales: </strong>
                                        {p.productSales}
                                    </p>
                                    <p>
                                        <strong>Color: </strong>
                                        {p.color}
                                    </p>
                                    <p>
                                        <strong>ImgUrl: </strong>
                                        client/assets/images/{p.imgUrl}
                                    </p>
                                    <p>
                                        <strong>Origin: </strong>
                                        {p.origin}
                                    </p>
                                    <p>
                                        <strong>ProductMaterial: </strong>
                                        {p.productMaterial}
                                    </p>
                                    <p>
                                        <strong>Size: </strong>
                                        {p.size}
                                    </p>
                                    <p>
                                        <strong>Categories: </strong>
                                        {p.categories}
                                    </p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </main>
        );
    }
}
