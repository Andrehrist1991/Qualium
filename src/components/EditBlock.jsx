import React, { useState } from 'react';
import { Button } from './';

const EditBlock = ({ id, title, description, price, qurQuantity, onUpdate }) => {

    const [curTitle, setCurTitle] = useState(title);
    const [curDescr, setCurDescr] = useState(description);
    const [curPrice, setCurPrice] = useState(price);

    const submitHandler = (e) => {
        e.preventDefault();
        
        const obj = {
            id,
            title: curTitle,
            description: curDescr,
            price: parseInt(curPrice),
            quantity: qurQuantity
        }

        if (curTitle && curDescr && obj.price && obj.price > 0) {
            onUpdate(obj);
        } else {
            alert("Please, enter correct values!")
        }
    }


    return (
        <form 
            className="product__form"
            onSubmit={submitHandler}
        >
            <div className="product__item style-single">
                <b>Edit Name</b>
                <input 
                    type="text"
                    placeholder={curTitle}
                    value={curTitle}
                    onChange={(e) => setCurTitle(e.target.value)}
                />
                <ul>
                <li><b>Edit Description:</b>
                    <textarea 
                        name="" 
                        rows="10"
                        placeholder={curDescr}
                        value={curDescr}
                        onChange={(e) => setCurDescr(e.target.value)}
                    >
                        
                    </textarea>
                </li>
                <li>
                    <b>Edit Price:</b>
                    <input 
                        type="number"
                        placeholder={curPrice}
                        value={curPrice}
                        onChange={(e) => setCurPrice(e.target.value)}
                    /> USD
                </li>
                </ul>
                <div className="product__btns">
                    <Button><i className="seve-ic"></i></Button>
                </div>
            </div>
        </form>
    )
}

export default EditBlock;
