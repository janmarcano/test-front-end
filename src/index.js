import React from 'react';
import ReactDOM from 'react-dom';

import { SearchBar } from './components/searchBar';
import { Categories } from './components/categories';

ReactDOM.render(
<div><h1>Hello, world!</h1><SearchBar/><br/><Categories categories={['cat 1','c2','tercer','ultimo']}/></div>,
document.getElementById('app')
);