import React from "react";
import Gasto from "./Gasto";
import Protypes from "prop-types";

const Listado = ({ gastos }: any) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>

      {gastos.map((gasto: any) => {
        return <Gasto key={gasto.id} gasto={gasto} />;
      })}
    </div>
  );
};

Listado.propTypes = {
  gastos: Protypes.array.isRequired,
};

export default Listado;
