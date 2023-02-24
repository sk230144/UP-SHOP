import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

function Header({cart, }) {
  return (
    <>
    <div className="header">
    <Link to="/">
    <img src="https://www.bing.com/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="header_logo"/>
    </Link>
    <div className="header_search">
      <input type="text"/>
      <SearchIcon className=" header__searchIcon"/>
      

    </div>

    <div className="header_nav">
    <div className="header__option">
    <span className="header__optionone">Hello it's saurabh</span>
    <span className="header__optiontwo">Sign in</span>
    </div>
    <div className="header__option">
    <span className="header__optionone">Return</span>
    <span className="header__optiontwo">& order</span>
    </div>
    <div className="header__option">
    <span className="header__optionone">Your</span>
    <span className="header__optiontwo">Prime</span>
    </div>
    <div className="header__optionBasket">
    <Link to="/cart">
    <ShoppingCartIcon/>
    <span>
      2
    </span>
    </Link>

      
    </div>

    </div>
      
    </div>
    <div className="header__bottom">
      <ul>
      <li>
          All
        </li>
        <li>
          mobile
        </li>
        <li>
          computer
        </li>
        <li>
          cloth
        </li>
        <li>
          shoes
        </li>
        <li>
          Electronics
        </li>
        <li>
          Groceries
        </li>
        <li>
          Prime
        </li>
        <li>
          <img src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/SWM_400x39_Crushed-S2._CB620377409_.jpg"/>
        </li>
        
      </ul>
    </div>
    </>
  )
}


export default Header
