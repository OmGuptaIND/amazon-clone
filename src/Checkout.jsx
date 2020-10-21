import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

export default function Checkout() {
    const [{basket} , dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                    <div className='checkout__image'>
                        <img 
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/Header_PC_1500x178_last.jpg"
                            alt="banner_one_err"
                            className="checkout__ad"
                        />
                        <img 
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/PEA_Bank_PC_ENGLISH_1500x140.jpg"
                            alt="banner_two_err"
                            className="checkout__ad"
                        />
                    </div>
                    {basket?.length===0 ? (
                        <div className="checkout__basket">
                            <h1>Your Basket is Empty </h1>
                            <p>You have no items in your basket. To buy one or more items, click "Add To Cart" next to the Item.</p>
                        </div>
                    ) : (
                        <div className="checkout__basket">
                            <h1 className="checkout__basket__title">Your Shopping Basket</h1>
                            {basket.map(item => (
                                <CheckoutProduct 
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length>0 && (
                <div className="checkout__right">
                    <Subtotal 
                        
                    />
                </div>
            )}
            
            
            
        </div>
    )
}
