import Card from "../../UI/Card/Card";
import MealList from "../MealList/MealList";
import "./MealContainer.css";

const MealContainer = () => {
  return (
    <Card className="food-list-container">
      <header className="food-list-header">
        <h2>Meals</h2>
      </header>
      <ul className="food-list">
        <MealList />
      </ul>
      <footer>
        <div>
          <h2>Total</h2>
        </div>
        <div className="total-meal-amount">Amount</div>
      </footer>
    </Card>
  );
};

export default MealContainer;
