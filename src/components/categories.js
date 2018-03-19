import React from 'react';

export class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: props.categories
        };
    }

    render() {
        var list = [];
        const length = this.state.categories.length;
        for (var i = 0; i < length - 1; i++) {
            list.push(<Category name={this.state.categories[i]}/>);
            list.push(<Separator/>);
        }
        list.push(<Category className="last " name={this.state.categories[length - 1]}/>);
        return <div>{list}</div>;
    }
}

function Separator(props) {
    return <span className="separator">{">"}</span>;
}

function Category(props) {
    return <span className={(props.className||'')+"category"}>{props.name}</span>;
}