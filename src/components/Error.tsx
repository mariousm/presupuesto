import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Error = ({ mensaje }: any) => {
  return (
    <Fragment>
      <p className="alert alert-danger error">{mensaje}</p>
    </Fragment>
  );
};

Error.propType = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
