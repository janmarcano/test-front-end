import React from 'react';

export class ProductDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }

    render() {
        return (
            <div className="productDetail">
                Detalle bro
                <img src={this.state.product.thumbnail}/>
                <div>$ {this.state.product.price}</div>
                <div>{this.state.product.title}</div>
            </div>
        );
    }
}