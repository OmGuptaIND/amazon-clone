import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider'

export default function CheckoutProduct({id , price ,rating ,image,name}) {
    const [{basket},dispatch]=useStateValue();

    const removeFromBasket =() =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
        <div className="checkoutproduct">
            <div className="checkoutproduct__img">
                <img
                    className="checkoutproduct__image" 
                    src={image}
                    alt="Product_image_err"
                />
            </div>
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__name">{name}</p>
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {
                        Array(rating).fill().map((_)=> <p>⭐</p>)   
                    }
                </div>
                <button onClick={removeFromBasket}>Remove From Cart</button>
            </div>
            
        </div>
    )
}
