import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
export default function Product({id, name , price ,image ,rating}) {

    const [{basket},dispatch]=useStateValue();

    const addToCart = () => {
        //dispatch the data of the item that actually initiated this fucn;
        dispatch({
            type:"ADD_TO_BASKET", //Everyting inside the dispatch is an action
            item:{
                id:id,
                name:name,
                price:price,
                image:image,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
        <div className="product__info">
            <p>{name}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating).fill().map((_)=> <p>⭐</p>)   
                }
            </div>
        </div>
            <img src={image} alt='image_err' />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}
