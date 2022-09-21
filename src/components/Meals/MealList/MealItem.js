import "./MealItem.css";

const MealItem = ({ name, description, price }) => {
  return (
    <li className="meal-item">
      <div className="meal-content">
        <h2 className="meal-name">{name}</h2>
        <p className="meal-description">{description}</p>
      </div>
      <div className="quantity-and-price-container">
        <form>
          <div className="meal-quantity">
            <label htmlFor="meal-quantity-number">Quantity:</label>
            <input
              type="number"
              name="meal-quantity-number"
              id="meal-quantity-number"
            />
          </div>
        </form>
        <div className="meal-price-and-ATC-button">
          <div className="meal-price"> ${price}</div>
          <div className="add-to-cart">
            <button className=" button atc-button"> Add To Cart</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MealItem;
