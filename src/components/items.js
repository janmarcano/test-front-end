import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SearchBar } from "./searchBar";
import { ProductList } from "./productList";
import { ProductDetail } from "./productDetail";
import { Categories } from "./categories";



export class Items extends React.Component {

    data;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('/items')
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

    render() {
        return (
            <items>
                <Categories categories={[1,2,3,4]}/>
                <Switch>
                    <Route exact path='/items' render={(props) => (
                        <ProductList products={data}/>
                    )}/>
                    <Route path='/items/:id' render={(props) => (
                        <ProductDetail product={data}/>
                    )}/>
                </Switch>
            </items>
        );
    }
}