import React from 'react';
import { Link } from 'react-router-dom';

import { FormatNumber } from '../../common/formatNumber';

import './item.scss';
const ic_shipping = require('../../../assets/ic_shipping.png');

export function Item(props) {
    return (
        <div className='item'>
            <div className='row no-gutters'>
                <div className='col-sm-auto'>
                    <Link to={`/items/${props.id}`}>
                        <div className='thumbnail'>
                            <img src={props.picture}/>
                        </div>
                    </Link>
                </div>
                <div className='col'>
                    <div className='price'>
                        <span className='amount'>
                            $&nbsp;<FormatNumber value={props.price}/>
                        </span>
                        {props.decimals>0 &&
                        <span className='decimals'>
                            &nbsp;{props.decimals}
                        </span>
                        }
                        {props.free_shipping &&
                        <span className='shipping'>
                            <img src={ic_shipping}/>
                        </span>
                        }
                    </div>
                    <Link to={`/items/${props.id}`}>
                        <div className='title'>{props.title}</div>
                    </Link>
                </div>
                <div className='col-2'>
                    <div className='address'>{props.address}</div>
                </div>
            </div>
        </div>
    );
}