import styled from "styled-components";

const ContactUsSectionBox = styled.section`
  & header {
    margin-bottom: 50px;
    text-align: center;
    & h2 {
      margin-bottom: 15px;
      color: #555;
      font-size: clamp(1.8rem, calc(4vw + 1rem), 3rem);
    }
    & p {
      color: #555;
      font-size: 18px;
    }
  }
`;
const ContactUsContainer = styled.div`
  max-width: 1160px;
  width: 90%;
  margin: 100px auto;
`;
const ContactUsGrid = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 40px;
    & > * {
      flex: 1;
    }
  }
`;

export { ContactUsSectionBox, ContactUsContainer, ContactUsGrid };
