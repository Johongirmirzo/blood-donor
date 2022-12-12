import styled from "styled-components";

const RegisterSection = styled.section`
  & > div {
    max-width: 660px;
    width: 90%;
    margin: 100px auto;
    & header {
      margin-bottom: 50px;
      text-align: center;
      & h2 {
        margin-bottom: 20px;
        color: #555;
        font-size: clamp(1.8rem, calc(4vw + 1rem), 2.5rem);
      }
      & p {
        color: #666;
        font-size: 18px;
      }
    }
  }
`;

export { RegisterSection };
