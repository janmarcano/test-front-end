import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import { App } from './app';

const element = (
    <BrowserRouter>
        <Route component={ App }/>
    </BrowserRouter>
);

ReactDOM.render(
    element,
    document.getElementById('app')
);