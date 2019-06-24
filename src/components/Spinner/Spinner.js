import React from "react";
import "./Spinner.scss";
import { Spinner as BootstrapSpinner } from "reactstrap";

const Spinner = () => (
  <BootstrapSpinner type="grow" color="primary" className="spinner" />
);

export default Spinner;
