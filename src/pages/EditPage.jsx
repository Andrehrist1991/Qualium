import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { updateProduct } from '../redux/actions/products';
import { updateCartProduct } from '../redux/actions/cart';

import { EditBlock } from '../components';

const EditPage = () => {
    const dispatch = useDispatch();

    const handleUpdateProduct = (obj) => {
        if (window.confirm('Save changes?')) {
            dispatch(updateProduct(obj))
            dispatch(updateCartProduct(obj))
        }
    }

    const { editValues } = useSelector(({ editItem }) => {
        return {
            editValues: editItem
        }
    })

    const { itemsInCart } = useSelector(({ productsCart }) => {
        return {
            itemsInCart: productsCart.items
        }
    });

    function getValue(array, search) {
        var i = array.length;
        while (i--) {
            if (array[i].id === search) {
               return array[i].quantity;
            }
        }
    }

    return (
        <div className="container">
            <div className="content__top">
                <h1>Edit Page</h1>
                
            </div>
            <div className="content__items style-center">
                <EditBlock 
                    onUpdate={handleUpdateProduct}
                    qurQuantity={getValue(itemsInCart, editValues.id)}
                    {...editValues} 
                />
            </div>
        </div>
    )
}

export default EditPage;
