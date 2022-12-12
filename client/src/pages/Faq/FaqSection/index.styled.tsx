import styled from "styled-components";

const FaqSectionBox = styled.section`
  color: #333;
  & header {
    margin-bottom: 50px;
    text-align: center;
  }
  & h2 {
    margin-bottom: 20px;
    font-size: clamp(1.5rem, calc(3vw + 1rem), 3rem);
    color: #555;
  }
  & p {
    font-size: 18px;
    color: #666;
  }
`;
const FaqSectionContainer = styled.div`
  max-width: 1160px;
  width: 90%;
  margin: 100px auto;
`;
const FaqListGrid = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { FaqSectionBox, FaqSectionContainer, FaqListGrid };
