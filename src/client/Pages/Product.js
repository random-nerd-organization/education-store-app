import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Product.css";

export default class Product extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        const res = await fetch('/api/products/' + params.id);
        const product = await res.json();
        this.setState({ data: [product] });
        console.log("PRODUCT");
        console.log(product);
    }

    render() {
        return (
            <main>
                <h1>Hello</h1>
                <div>
                    {
                        this.state.data.map(p => (
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
                        ))
                    }
                </div>
            </main>
        )
    }
}
