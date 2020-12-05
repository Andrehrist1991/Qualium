import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addProductCart, removeProductCart } from '../redux/actions/cart';
import { setProductForEdit } from '../redux/actions/edit';
import { removeProduct, toggleCartFlag } from '../redux/actions/products';
import { ProductBlock, Button, Pagination } from '../components';

const MainPage = ({ indexOfFirstPost, indexOfLastItem, items, paginate, itemsPerPage, currentPage }) => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const currentItems = items.slice(indexOfFirstPost, indexOfLastItem);
    
    const handleAddProductCart = (obj, id) => {
        dispatch(addProductCart(obj))
        dispatch(toggleCartFlag(id))
    }

    const filteredItemsTitles = currentItems.filter(elem => elem.title.toLowerCase().match(searchValue));

    const handleAddProductForEdit = (obj) => {
        dispatch(setProductForEdit(obj))
    }

    const handleRemoveItem = (id) => {
        if (window.confirm('Delete product?')) {
            dispatch(removeProduct(id));
            dispatch(removeProductCart(id));
        }
    }
    
    return (
        <div className="container">
            <div className="content__top">
                <h1>Home Page</h1>
                <div className="page-search">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <Link to="/create"><Button>Create product</Button></Link>
            </div>
            <div className="content__items">
                {items && filteredItemsTitles.map((obj) => (
                    <ProductBlock 
                        key={obj.id}
                        {...obj}
                        onClickProductToCart={handleAddProductCart}
                        onRemove={handleRemoveItem}
                        onEdit={handleAddProductForEdit}
                    />
                ))}
            </div>
            {items.length >= filteredItemsTitles.length ? (<Pagination 
                paginate={paginate}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                totalItems={items.length}
            />) :  <></>}
        </div>

    )
}

export default MainPage;
