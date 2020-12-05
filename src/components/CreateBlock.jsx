import React, { useState } from 'react';

import { Button } from './';

const CreateBlock = ({ onCreate }) => {

    const [createTitle, setCreateTitle] = useState("");
    const [createDescr, setCreateDescr] = useState("");
    const [createPrice, setCreatePrice] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        
        const obj = {
            id: Date.now().toString(),
            title: createTitle,
            description: createDescr,
            price: parseInt(createPrice),
            inCart: false
        }
        
        if (createTitle && createDescr && obj.price && obj.price > 0) {
            onCreate(obj);
        } else {
            alert("Please, enter correct values!");
        }
    }

    return (
        <form 
            className="product__form"
            onSubmit={submitHandler}
        >
            <div className="product__item style-single">
                <b>Enter Name:</b>
                    <input 
                        type="text"
                        placeholder={createTitle}
                        value={createTitle}
                        onChange={(e) => setCreateTitle(e.target.value)}
                />
                <ul>
                <li><b>Enter Description:</b>
                    <textarea 
                        name="" 
                        rows="10"
                        placeholder={createDescr}
                        value={createDescr}
                        onChange={(e) => setCreateDescr(e.target.value)}
                    >
                        
                    </textarea>
                </li>
                <li>
                    <b>Enter Price:</b>
                    <input 
                        type="number"
                        placeholder={createPrice}
                        value={createPrice}
                        onChange={(e) => setCreatePrice(e.target.value)}
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

export default CreateBlock;
