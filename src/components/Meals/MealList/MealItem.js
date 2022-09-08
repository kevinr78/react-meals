import Button from "../../UI/Button/Button";
import "./MealItem.css";

const MealItem = ({ name, description, price }) => {
  return (
    <li className="meal-item">
      <div className="meal-content">
        <h2 className="meal-name">{name}</h2>
        <p className="meal-description">{description}</p>
      </div>
      <div className="quantity-and-price-container">
        <div className="meal-quantity">
          <span>Quantity:</span>
          <input type="number" name="meal-quantity-number" />
        </div>
        <div className="meal-price-and-ATC-button">
          <div className="meal-price"> ${price}</div>
          <div className="add-to-cart">
            <Button className="atc-button"> Add To Cart</Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MealItem;
