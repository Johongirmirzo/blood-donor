import styled from "styled-components";
import { FormButton } from "../../styles/UI/Form/index.styled";

const RegisterFormLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 15px;
  color: #111;
  & * {
    width: auto;
  }
`;
const RegisterFormButton = styled(FormButton)`
  background: #ef3d32;
  transition: all 0.3s ease-out;
  &:hover {
    background: hsl(3, 85%, 52%);
  }
`;

export { RegisterFormLabel, RegisterFormButton };
