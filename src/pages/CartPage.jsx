import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { ProductBlockCart, Pagination } from '../components';
import {removeProductCart } from '../redux/actions/cart';
import {toggleCartFlag } from '../redux/actions/products';
const CartPage = ({ indexOfFirstPost, indexOfLastItem, paginate, itemsPerPage, currentPage}) => {

    const dispatch = useDispatch();

    const { items, finalPriceCart } = useSelector(({ productsCart }) => {
        return {
            items: productsCart.items,
            finalPriceCart: productsCart.totalCartPrice
        }
    });

    const currentItems = items.slice(indexOfFirstPost, indexOfLastItem);

    const handleRemoveCartItem = (id) => {
        if (window.confirm('Really delete?')) {
            dispatch(removeProductCart(id));
            dispatch(toggleCartFlag(id));
        }
    }

    return (
        <div className="container">
            <div className="content__top">
                <h1>Cart Page</h1>
            </div>
            <div className="content__items">
                {items && currentItems.map((obj) => (
                    <ProductBlockCart 
                        key={obj.id}
                        onRemove={handleRemoveCartItem}
                        {...obj}
                    />
                ))}
            </div>
            <div className="content__bottom">
                <b>TOTAL PRICE: {finalPriceCart} USD</b>
            </div>
            {items.length >= currentItems.length ? (<Pagination 
                paginate={paginate}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                totalItems={items.length}
            />) :  <></>}
            
        </div>
    )
}

export default CartPage;
