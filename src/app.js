import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SearchBar } from './components/searchBar';
import { Items } from './components/items';
import { PageNotFound } from './components/pageNotFound';

export const App = (props) => (
    <div className='container'>
        <SearchBar/>
        <Switch>
            <Route exact path='/' render={ null }/>
            <Route path='/items' component={ Items }/>
            <Route component={ PageNotFound }/>
        </Switch>
    </div>
);