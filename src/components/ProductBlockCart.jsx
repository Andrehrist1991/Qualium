import React from 'react';
import { useDispatch } from 'react-redux';

import { onPlusCartItem, onMinusCartItem} from '../redux/actions/cart';
import {Button, PlusMinus} from './';

const ProductBlockCart = ({ id, title, description, price, onRemove, quantity }) => {
    const dispatch = useDispatch();

    const handleRemoveClick = () => {
        onRemove(id);
    };

    const handlePlusClick = () => {
        dispatch(onPlusCartItem(id));
    }

    const handleMinusClick = () => {
        dispatch(onMinusCartItem(id));
    }

    return (
        <div className="product__item style-cart-item">
            <h3 className="product__name">{title}</h3>
            <ul>
                <li className="product__descr"><b>Description:</b> {description}</li>
                <li><b>Price:</b> {price} USD {quantity > 1 ? <span className="price-descr">(&nbsp; x {quantity} = {price * quantity}&nbsp;)</span> : <></>} </li>
            </ul>
            <div className="product__btns">
                <PlusMinus 
                    id={id}
                    onPlusItem={handlePlusClick}
                    onMinusItem={handleMinusClick}
                    totalCount={quantity}
                />
                <Button onClick={handleRemoveClick} className="danger"><i className="trash-ic"></i></Button>
            </div>
        </div>
    )
}

export default ProductBlockCart;
