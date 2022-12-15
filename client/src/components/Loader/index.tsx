import React from "react";
import { GridLoader } from "react-spinners";
import { LoaderBox } from "./index.styled";

const Loader = () => {
  return (
    <LoaderBox>
      <GridLoader color="#ef3d32" />
    </LoaderBox>
  );
};

export default Loader;
