import styled from "styled-components";

const ValueSection = styled.section`
  max-width: 960px;
  margin: 30px auto 0 auto;
`;
const ValueHeader = styled.header`
  margin-bottom: 30px;
`;
const ValueTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
  color: #fff;
`;
const ValueFormBox = styled.div`
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #1a202e;
  color: #fff;
`;

export { ValueSection, ValueHeader, ValueTitle, ValueFormBox };
