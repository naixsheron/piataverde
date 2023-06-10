import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Legume proaspete de la piață, livrate direct la tine acasă</h2>
      <p>
        Alege-ți legumele preferate din selecția noastră variată și bucură-te de
        o masă delicioasă la prânz sau cină, în confortul propriului cămin.
      </p>
      <p>
        Toate legumele noastre sunt cultivate cu ingrediente de înaltă calitate,
        proaspete și sunt gătite de către bucătari experimentați, exact în
        momentul comenzii tale!
      </p>
    </section>
  );
};

export default MealsSummary;
