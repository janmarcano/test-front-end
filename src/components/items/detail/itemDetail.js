import React from 'react';

import { Categories } from "../categories";

export class ItemDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            item: {},
            noResults: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch('/api/items/' + id)
        .then((results) => {
            return results.json()
        }).then((data) => {
            if (data.status == 404) {
                this.setState({noResults: true});
            } else {
                this.setState({
                    item: data.item,
                    categories: data.categories,
                    noResults: !!data.item
                });
            }
        });
    }

    render() {
        const item = this.state.item;
        if (item.id) {
            return (
                <div className="itemDetail">
                    <img src={item.picture}/>
                    <div>
                        {item.condition == 'new' ? 'Nuevo' : 'Usado'}
                        {item.sold_quantity>0 ? ` - ${item.sold_quantity} vendidos` : ''}
                    </div>
                    <div>{item.title}</div>
                    <div>$ {item.price.amount} {item.price.decimals>0 && item.price.decimals}</div>
                    {!!item.description && (
                    <div>
                        <h1>Descripción del producto</h1>
                        <span>{item.description}</span>
                    </div>
                    )}
                </div>
            );
        } else if (this.state.noResults) {
            return <span>No existe el producto solicitado</span>
        } else return null;
    }

}