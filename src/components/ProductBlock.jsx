import React from 'react';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from './';

const ProductBlock = ({ id, title, description, price, onRemove, onEdit, onClickProductToCart }) => {
    const { matchId } = useSelector(({ productsCart }) => {
        return {
            matchId: productsCart.items
        }
    });

    function idExists(someValue) {
        return matchId.some(function(el) {
            return el.id === someValue;
        }); 
    }

    const onAddProduct = () => {
        const obj = {
            id,
            title,
            price,
            description,
            quantity: 1
        }
        onClickProductToCart(obj, obj.id)
    }

    const onEditProduct = () => {
        const obj = {
            id,
            title,
            price,
            description
        }
        onEdit(obj)
    }

    const handleRemoveClick = () => {
        onRemove(id);
    }

    return (
        <div className="product__item">
            <h3 className="product__name">{title}</h3>
            <ul>
                <li className="product__descr"><b>Description:</b> {description}</li>
                <li><b>Price:</b> {price} USD</li>
            </ul>
            <div className="product__btns">
                <Link to="/edit"><Button onClick={onEditProduct}><i className="edit-ic"></i></Button></Link>
                <Button onClick={handleRemoveClick} className="danger"><i className="trash-ic"></i></Button>
                <Button onClick={onAddProduct} className={classNames('success', {disabled: idExists(id)})}><i className="cart-ic"></i></Button>
            </div>
        </div>
    );
};

export default ProductBlock;
