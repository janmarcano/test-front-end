import React from 'react';

export function FormatNumber(props) {
    const number = new Intl.NumberFormat('es').format(props.value);
    return (
        <span>{number}</span>
    );
}