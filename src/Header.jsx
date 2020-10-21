import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


export default function Header() {
    const [{basket,user}] =useStateValue(); // const [state,dispatch] = useStateValue();
    console.log(basket);

    const handleClick = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to='/'>
                <img 
                    className="header__logo" 
                    src="https://press.aboutamazon.com/sites/g/files/knoqqb37121/themes/site/nir_pid2497/styleguide/media/logo.svg" 
                    alt="logo__Error" 
                />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={handleClick} className="header__option">
                        <span className="header__optionlineone">Hello {user && user.email} </span>
                        <span className="header__optionlinetwo" >{!user ? 'Sign In' : 'Sign Out'}</span>
                    </div>
                </Link>

                <Link to='/orders' className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineone" >Return</span>
                        <span className="header__optionlinetwo" >&Orders</span>
                    </div>
                </Link>

                <Link to='/others' className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineone" >Your</span>
                        <span className="header__optionlinetwo" >Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header__linkBasket'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionlinetwo header__optionBasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}
