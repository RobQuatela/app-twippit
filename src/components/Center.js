import React from 'react';

export const Center = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {props.children}
        </div>
    )
}
