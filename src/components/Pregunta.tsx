import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({guardarPresupuesto, guardarRestante}: any) => {
  // Definimos el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Método que se ejecuta cada vez que el usuario introduce un número en el input
  const definirPresupuesto = (e: React.ChangeEvent<HTMLInputElement>) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  // Submit para definir el presupuesto
  const agregarPresupuesto = (e: any) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    // Si pasamos la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Introduce tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
