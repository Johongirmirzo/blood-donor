import React from "react";
import ValueForm from "./ValueForm";
import {
  ValueSection,
  ValueHeader,
  ValueTitle,
  ValueFormBox,
} from "./index.styled";

const Value = () => {
  return (
    <ValueSection>
      <ValueHeader>
        <ValueTitle>Update Our Value</ValueTitle>
      </ValueHeader>
      <ValueFormBox>
        <ValueForm />
      </ValueFormBox>
    </ValueSection>
  );
};

export default Value;
