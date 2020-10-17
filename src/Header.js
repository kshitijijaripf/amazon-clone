 import React from 'react'
 import "./Header.css";
 import { Link } from "react-router-dom";
 import SearchIcon from "@material-ui/icons/Search";
 import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

 function Header() {
     return (
         <nav className="header">
                 {/*logo*/}
                 <Link to="/">
             <img 
                 className="header__logo"
                  src="https://sickr.files.wordpress.com/2019/06/amazon_logo.jpg"
                  alt=""
                  />
             </Link>
               
             {/*search box*/}
             <div className="header_search">
             <input type="text" classname="header__searchInput"/>
             <SearchIcon className="header__searchIcon" />

             </div>
             
            
                {/*links */}
            
                <div className="header__nav">
                 {/*1st link*/}
                 <Link  to="/Login" className="header__link">
                        <div className="header__option">
                          <span className="header__optionLineOne">Hello ksh</span>
                          <span className="header__optionLineTwo">SignIn</span>
                        </div>
                     </Link>
                
                 {/*2nd link*/}
              
                
                 <Link to="/" className="header__link">
                        <div className="header__option">
                          <span className="header__optionLineOne">Returns</span>
                          <span className="header__optionLineTwo">& Orders</span>
                        </div>
                     </Link>
              

                 {/*3rd link*/}

                
                
                 <Link to="/" className="header__link">
                        <div className="header__option">
                          <span className="header__optionLineOne">Your</span>
                          <span className="header__optionLineTwo">Prime</span>
                        </div>
                     </Link>
                </div>
             
                 {/*basket icon*/}
                 <Link to="/checkout"  className="header__link">
                  <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span>0</span>

                  </div>

                 </Link>

         
         </nav> 
     )
 }
 
 export default Header
 