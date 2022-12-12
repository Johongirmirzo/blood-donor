import styled, { css } from "styled-components";
import { ButtonProps } from "./index.types";

const Button = styled.button`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  padding: 15px 20px;
  background: #5858d9;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  ${(props: ButtonProps) =>
    props.round &&
    css`
      border-radius: 50px;
    `}
`;
const ButtonOutline = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  font-size: 17px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #5a8dee;
  background: #fff;
  color #5a8dee;
  font-weight: bold;
  cursor: pointer;
`;

export { Button, ButtonOutline };
