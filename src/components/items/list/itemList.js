import React from 'react';

import { Categories } from "../categories";
import { Item } from "./item";
import queryString from "query-string";

export class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            items: [],
            noResults: false
        };
    }

    render() {
        const items = this.state.items;
        const categories = this.state.categories;
        if (items.length) {
            let list = items.map((item) => {
                return <Item
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price.amount}
                            decimals={item.price.decimals}
                            picture={item.picture}
                            condition={item.condition}
                            free_shipping={item.free_shipping}
                            address={item.address}
                        />;
            });
            return (<div className="itemList">
                        <Categories categories={categories}/>
                        {list}
                    </div>);
        } else if (this.state.noResults) {
            return <span>No hay resultados para esta búsqueda</span>
        } else return null;
    }

    componentDidMount() {
        this.getItems();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search != this.props.location.search) {
            this.setState({
                items: [],
                categories: [],
                noResults: false
            });
            this.getItems();
        }
    }

    getItems() {
        const search = queryString.parse(location.search);
        const query = search.search;
        fetch('/api/items?q=' + query)
        .then((results) => {
            return results.json()
        }).then((data) => {
            this.setState({
                items: data.items,
                categories: data.categories,
                noResults: !!data.items
            });
        });
    }
}