import React from 'react';
import { Switch, Route } from 'react-router-dom';
import queryString from 'query-string';

import { ItemList } from "./list/itemList";
import { ItemDetail } from "./detail/itemDetail";

export class Items extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <Switch>
                            <Route exact path='/items' component={ItemList}/>
                            <Route path='/items/:id' component={ItemDetail}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}