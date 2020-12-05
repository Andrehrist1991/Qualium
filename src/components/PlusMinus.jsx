import React from 'react';

import { Button } from './';

const PlusMinus = ({onPlusItem, onMinusItem, totalCount }) => {
    return (
        <div className="plus-minus">
            <Button 
                onClick={onMinusItem}
            ><i className="minus-ic"></i></Button>
            <input
                type="text"
                placeholder={totalCount}
            />
            <Button
                onClick={onPlusItem}
            ><i className="plus-ic"></i></Button>
        </div>
    )
}

export default PlusMinus;
