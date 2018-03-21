import React from 'react';

import { Link } from 'react-router-dom';

export function Item(props) {
    return (
        <div className="item">
            <Link to={`/items/${props.id}`}>
                <img src={props.picture}/>
            </Link>
            <div>$ {props.price} {props.decimals>0 && props.decimals}</div>
            {props.free_shipping &&
            <div>free shipping</div>
            }
            <Link to={`/items/${props.id}`}>
                <div>{props.title}</div>
            </Link>
            <div>{props.address}</div>
        </div>
    );
}