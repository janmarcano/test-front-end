import React from 'react';

export class Categories extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const length = this.props.categories.length;
        if (length) {
            var list = [];
            for (var i = 0; i < length - 1; i++) {
                const category = this.props.categories[i];
                list.push(<Category name={category} key={category}/>);
            }
            const last = this.props.categories[length - 1];
            list.push(<Category last name={last} key={last}/>);
            return <div>{list}</div>;
        } else {
            return null;
        }
    }
}

function Category(props) {
    return (
        <span className={(props.last?'last':'')+"category"}>
            {props.name}
            { !props.last &&
                <i className="separator">{">"}</i>
            }
        </span>
    );
}