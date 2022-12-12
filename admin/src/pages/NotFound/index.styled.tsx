import styled from "styled-components";

const NotFoundSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NotFoundHeader = styled.header`
  text-align: center;
`;
const NotFoundTitle = styled.h1`
  font-size: clamp(3rem, calc(5vw + 1rem), 6rem);
  font-weight: bold;
  color: #fff;
`;
const NotFoundSecondaryTitle = styled.h2`
  color: #f7f7f7;
  & a {
    text-decoration: underline;
    cursor: pointer;
    color: #2d2dea;
  }
`;

export {
  NotFoundSection,
  NotFoundHeader,
  NotFoundTitle,
  NotFoundSecondaryTitle,
};
