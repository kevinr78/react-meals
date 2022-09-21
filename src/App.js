import React, { useState } from "react";
import Header from "./components/UI/Header/Header";
import Main from "./components/UI/Main/Main";
import Cart from "./components/Cart/Cart";

function App(props) {
  const [modalIsActive, setModalIsActive] = useState(false);

  const toggleModal = (val) => {
    setModalIsActive(!modalIsActive);
  };
  return (
    <div className="App">
      {modalIsActive && <Cart handleModal={toggleModal} />}

      <Header displayModal={toggleModal} />
      <Main />
    </div>
  );
}

export default App;
