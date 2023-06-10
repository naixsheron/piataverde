import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import image from "../../assets/meals2.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.te}>Piața Verde</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="meal" />
      </div>
    </Fragment>
  );
};

export default Header;
