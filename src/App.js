import Header from "./component/Layout/Header";
import React, { useState } from "react";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CardProvider from "./store/CardProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CardProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
