import styled from "styled-components";

const ChangeProfileSection = styled.section`
  & > div {
    max-width: 660px;
    margin: 100px auto;
    & header {
      margin-bottom: 50px;
      text-align: center;
      & h2 {
        color: #555;
        font-size: clamp(1.8rem, calc(4vw + 1rem), 3rem);
      }
    }
  }
`;

export { ChangeProfileSection };
