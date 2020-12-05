import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
    
    const { itemsInCart } = useSelector(({ productsCart }) => {
        return {
            itemsInCart: productsCart.items.length
        }
    });

    return (
        <nav>
            <ul className="main-menu">
                <li className="main-menu__itm"><NavLink to="/" activeClassName="active"><img className="logo" alt-text="logo" /></NavLink></li>
    <li className="main-menu__itm"><NavLink to="/cart" activeClassName="active" className="main-menu__link">Cart</NavLink> {itemsInCart > 0 ? (<sup className="quant-indicator">{itemsInCart}</sup>) : <></>}</li>
                <li className="main-menu__itm"><NavLink to="/create" activeClassName="active" className="main-menu__link">Create Product</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;
