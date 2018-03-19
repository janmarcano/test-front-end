import React from 'react';

export class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    render() {
        const products = this.state.products;
        return (
            <div className="productList">
                {products}
            </div>
        );
    }

    componentDidMount() {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=apple%20ipod')
        .then((results) => {
            return results.json()
        }).then((data) => {
            let products = data.results.map((product) => {
                return (
                    <Product key={product.id} title={product.title} thumbnail={product.thumbnail} price={product.price}/>
                );
            });
            this.setState({products: products});
        });
    }
}

function Product(props) {
    return (
        <div className="product">
            <img src={props.thumbnail}/>
            <div>$ {props.price}</div>
            <div>{props.title}</div>
        </div>
    );
}