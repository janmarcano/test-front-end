import React from 'react';
import { ChevronRight } from 'react-bytesize-icons';

import './categories.scss';

export class Categories extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const length = this.props.categories.length;
        var list = [];
        for (var i = 0; i < length - 1; i++) {
            const category = this.props.categories[i];
            list.push(<Category name={category} key={category}/>);
            list.push(<Separator key={'separator'+i}/>);
        }
        const last = this.props.categories[length - 1];
        list.push(<Category last name={last} key={last}/>);
        return (
            <div className='categories-container'>
                {length?list:<span>&nbsp;</span>}
            </div>
        );
    }
}

function Category(props) {
    return (
        <span className={props.last?'last':''}>
            {props.name}
        </span>
    );
}

function Separator() {
    return (
        <span>
            <ChevronRight height={10} width={10} strokeWidth='10.9375%'/>
        </span>
    )
}