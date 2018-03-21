import React from 'react';
import { Switch, Route } from 'react-router-dom';
const queryString =  require('query-string');

require('./stylesheets/main.scss');
import { SearchBar } from './components/common/searchBar';
import { Items } from './components/items/items';
import { PageNotFound } from './components/common/pageNotFound';

export class App extends React.Component {

    constructor(props) {
        super(props);
        const query = queryString.parse(props.location.search);
        this.state = {
            search: query.search || ''
        }
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(search) {
        this.props.history.push({pathname: '/items', search:`search=${search}`});
        this.setState({search:search});
    }

    render() {
        return (
            <div className='container'>
                <SearchBar
                    search={this.state.search}
                    onSearchSubmit={this.handleSearchSubmit}/>
                <Switch>
                    <Route exact path='/' render={ null }/>
                    <Route path='/items' component={ Items }/>
                    <Route component={ PageNotFound }/>
                </Switch>
            </div>
        )
    }
}