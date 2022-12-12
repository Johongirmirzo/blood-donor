import styled, { css } from "styled-components";
import { IContainerProps } from "./index.types";

const Container = styled.section`
  margin: 30px auto 30px auto;
  max-width: 960px;
  width: 90%;

  ${(props: IContainerProps) =>
    props.fluid &&
    css`
      max-width: 100%;
      width: 100%;
    `};
`;
const Header = styled.header`
  margin-bottom: 30px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
  color: #fff;
`;
const Box = styled.div`
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #1a202e;
  color: #fff;
`;

export { Container, Header, Title, Box };
