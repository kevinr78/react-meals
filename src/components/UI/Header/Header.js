import "../../../index.css";
import Button from "../Button/Button";
import "../Header/Header.css";

const Header = () => {
  return (
    <header>
      <div className="app-logo">
        <h2>ReactMeals</h2>
      </div>
      <div className="view-cart-section">
        <div className="view-cart-container">
          <Button className="view-cart-button">View cart</Button>
          <span className="cart-items-number">5</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
