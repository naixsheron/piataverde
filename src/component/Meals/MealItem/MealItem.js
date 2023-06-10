// MealItem.js

import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CardContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CardContext);
  const price = `${props.price.toFixed(2)} RON/Kg`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        {props.image && (
          <img className={classes.image} src={props.image} alt={props.name} />
        )}

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
