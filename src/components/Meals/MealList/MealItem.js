const MealItem = ({ name, description, price }) => {
  return (
    <li>
      <div className="meal-content">
        <h2 className="meal-name">{name}</h2>
        <p className="meal-description">{description}</p>
      </div>
      <div className="quantity-and-price-container">
        <div className="meal-quantity"></div>
      </div>
    </li>
  );
};

export default MealItem;
