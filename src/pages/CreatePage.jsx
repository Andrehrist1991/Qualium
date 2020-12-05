import React from 'react';
import { useDispatch } from 'react-redux';

import { CreateBlock } from '../components';

import { createProduct } from '../redux/actions/products';

const CreatePage = () => {

    const dispatch = useDispatch();

    const handleCreateProduct = (obj) => {
        if (window.confirm('Create Product?')) {
            dispatch(createProduct(obj))
        }
    }

    return (
        <div className="container">
        <div className="content__top">
            <h1>Create Page</h1>
            
        </div>
        <div className="content__items style-center">
            <CreateBlock 
                onCreate={handleCreateProduct}
            />
        </div>
    </div>
    )
}

export default CreatePage;
