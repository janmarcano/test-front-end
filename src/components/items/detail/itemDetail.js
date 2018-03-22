import React from 'react';

import { Categories } from "../categories";
import { FormatNumber } from '../../common/formatNumber';

import '../items.scss';
import './itemDetail.scss';
const ic_shipping = require('../../../assets/ic_shipping.png');

export class ItemDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            item: {},
            noResults: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch('/api/items/' + id)
        .then((results) => {
            return results.json()
        }).then((data) => {
            if (data.status == 404) {
                this.setState({noResults: true});
            } else {
                console.log(data.item);
                this.setState({
                    item: data.item,
                    categories: data.categories,
                    noResults: !!data.item
                });
            }
        });
    }

    render() {
        const item = this.state.item;
        const categories = this.state.categories;
        if (item.id) {
            return (
                <div className="row no-gutters">
                    <Categories className='col-12' categories={categories}/>
                    <div className="col-12 items-container">
                        <div className='row'>
                            <div className='col'>
                                <div className='picture'>
                                    <img className='fluid-image' src={item.picture}/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='info'>
                                    <div className='condition'>
                                        {item.condition == 'new' ? 'Nuevo' : 'Usado'}
                                        {item.sold_quantity>0 ? ` - ${item.sold_quantity} vendidos` : ''}
                                    </div>
                                    <div className='title'>
                                            {item.title}
                                    </div>
                                    <div className='price'>
                                        <span className='amount'>
                                            $&nbsp;<FormatNumber value={item.price.amount}/>
                                        </span>
                                        <span className='decimals'>
                                            &nbsp;{item.price.decimals>0 && item.price.decimals}
                                        </span>
                                        <span className='shipping'>
                                            <img src={ic_shipping}/>
                                        </span>
                                    </div>
                                    <div className='button-container'>
                                        <button className='primary-button'>
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span>{!!item.description}</span>
                        {!!item.description && (
                        <div className='row'>
                            <div className='col-8'>
                                <div className='description'>
                                    <div className='title'>Descripción del producto</div>
                                    <div className='content'>{item.description}</div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            );
        } else if (this.state.noResults) {
            return <span>No existe el producto solicitado</span>
        } else return null;
    }

}