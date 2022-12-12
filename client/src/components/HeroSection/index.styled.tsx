import styled, { css } from "styled-components";

interface HeroProps {
  bgImage: string;
}
const HeroSection = styled.section`
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props: HeroProps) =>
    props.bgImage &&
    css`
      background: url(${props.bgImage}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      background-blend-mode: multiply;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
    `};
`;
const HeroTextBox = styled.div`
  & h1 {
    font-size: clamp(1.5rem, calc(3vw + 1rem), 3rem);
    text-transform: uppercase;
  }
  & p {
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    & a {
      margin-right: 10px;
      color: #fff;
      transition: all 0.3s ease-out;
      &:hover {
        color: #ef3d32;
      }
    }
  }
`;

export { HeroSection, HeroTextBox };
