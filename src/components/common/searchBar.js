import React from 'react';

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        this.props.onSearchSubmit(this.query.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSearchSubmit}>
                <input
                    ref={(node)=>this.query=node}
                    defaultValue={this.props.search}
                    type="text"/>
                <button type="submit">
                    Buscar
                </button>
            </form>
        );
    }
}