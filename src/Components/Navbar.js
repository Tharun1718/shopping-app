import React from "react";
import './Navbar.css';

function Navbar({itemCount}){
    return(
      <div className="navbar__container">
        <div className="navbar__container__left">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Shop</h3>
        </div>
        <div className="navbar__container__right">
        <button>Cart {itemCount}</button> 
        </div>
      </div>
    )
  }
  
  export default Navbar;
  