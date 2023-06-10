import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotSixXhards = (value) => value.trim().length !== 6;

const Checkout = (props) => {
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isNotSixXhards(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputValid.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Nume</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValid.name && <p>Introdu un nume valid</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValid.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Strada</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValid.street && <p>Intodu o strada valida</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValid.postalCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Cod postal</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValid.postalCode && (
          <p>Introdu un cod postal valid(sa contina 6 caractere)</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputValid.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValid.city && <p>Introdu un oras valid</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Inchide
        </button>
        <button className={classes.submit}>Confirma</button>
      </div>
    </form>
  );
};

export default Checkout;
