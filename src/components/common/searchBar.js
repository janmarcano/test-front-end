import React from 'react';

require('./searchBar.scss');

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
            <div>
                <div className='search-bar'>
                    <div className="logo">
                        <form onSubmit={this.handleSearchSubmit}>
                            <input
                                ref={(node)=>this.query=node}
                                defaultValue={this.props.search}
                                type="text"/>
                            <button type="submit">
                                Buscar
                            </button>
                        </form>
                    </div>
                    <div className="c1">s</div>
                    <div className="c2">s</div>
                </div>
                <div className='search-bar'>
                    <div className="c2">s</div>
                </div>
            </div>
        );
    }
}