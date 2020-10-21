import React from 'react'
import './Home.css'
import Product from './Product'

export default function Home() {
    return (
        <div className="home">
            <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="prime_image_err"
                className="home__image"
            />
            <div className="home__row">
                <Product 
                    id='12346'
                    price={721.00}
                    name="Fitbit Inspire Health and Fitness Tracker (Black)"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating={5}
                />
                <Product 
                    id='12345'
                    price={3999}
                    name="Apple iPhone 11 (64GB) - White (EarPods & Power Adapter in The Box)"
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-space-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953858806"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product 
                    id='12347'
                    price={200}
                    name="All-new Echo Dot (4th Gen) | Next generation smart speaker with powerful bass and Alexa (Black)"
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    rating={5}
                />
                <Product 
                    id='12345'
                    price={3999}
                    name="Apple iPhone 11 (64GB) - White (EarPods & Power Adapter in The Box)"
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-space-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953858806"
                    rating={4}
                />

                <Product 
                    id='12345'
                    price={3999}
                    name="Apple iPhone 11 (64GB) - White (EarPods & Power Adapter in The Box)"
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-space-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953858806"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product 
                    id='12345'
                    price={3999}
                    name="Apple iPhone 11 (64GB) - White (EarPods & Power Adapter in The Box)"
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-space-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953858806"
                    rating={4}
                />
            </div>
            
        </div>
    )
}
