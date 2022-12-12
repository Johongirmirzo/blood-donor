import styled from "styled-components";
import { FormButton } from "../../styles/UI/Form/index.styled";

const LoginFormBtn = styled(FormButton)`
  background: #ef3d32;
  transition: all 0.3s ease-out;
  &:hover {
    background: hsl(3, 85%, 52%);
  }
`;

export { LoginFormBtn };
