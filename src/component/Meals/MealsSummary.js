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
        Te rugăm să reții că livrările se fac exclusiv în zona Oradea, cu un
        timp de așteptare estimat între 1 și 2 ore. Prețul poate varia ușor în
        funcție de cantitate, cu o deviație de aproximativ 10%.
      </p>
    </section>
  );
};

export default MealsSummary;
