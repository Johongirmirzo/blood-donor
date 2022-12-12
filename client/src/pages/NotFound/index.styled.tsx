import styled from "styled-components";

const NotFoundSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
`;
const NotFoundHeader = styled.header`
  text-align: center;
`;
const NotFoundTitle = styled.h1`
  font-size: clamp(3rem, calc(5vw + 1rem), 6rem);
  font-weight: bold;
  color: #333;
`;
const NotFoundSecondaryTitle = styled.h2`
  color: #444;
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
