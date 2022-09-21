import React, { useState } from "react";
import MealItem from "../Meals/MealList/MealItem";
import Modal from "../UI/Modal/Modal";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
];
const closeModal = () => {};
const closeBtnStyle = {
  textAlign: "right",
  position: "absolute",
  right: "20px",
  top: "5px",
  fontWeight: "bold",
  marginBottom: "20px",
  cursor: "pointer",
};

const Cart = (props) => {
  const handleModalState = () => {
    props.handleModal();
  };

  return (
    <Modal>
      <div onClick={handleModalState} style={closeBtnStyle}>
        {" "}
        X
      </div>
      {DUMMY_MEALS.map((meal) => {
        return (
          <MealItem
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Total</h2>
        </div>
        <div>Amount</div>
      </footer>
    </Modal>
  );
};

export default Cart;
