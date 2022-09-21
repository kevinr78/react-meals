import "../../../index.css";
import { useState } from "react";
import "../Header/Header.css";

const Header = (props) => {
  const toggleCart = (e) => {
    props.displayModal();
  };
  return (
    <header>
      <div className="app-logo">
        <h2>ReactMeals</h2>
      </div>
      <div className="view-cart-section">
        <div className="view-cart-container">
          <button onClick={toggleCart} className="button view-cart-button">
            View cart
          </button>
          <span className="cart-items-number">5</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
