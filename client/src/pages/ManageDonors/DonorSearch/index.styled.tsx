import styled from "styled-components";

const DonorSearchBox = styled.div`
  max-width: 960px;
  width: 90%;
  margin: 100px auto;
  & > * {
    margin-bottom: 20px;
  }
  & div {
    display: flex;
    gap: 20px;
  }
  & button {
    padding: 10px 0;
    width: 50%;
    background: #ef3d32;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  & button:last-of-type {
    background: #848484;
  }
  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
    & div {
      width: 100%;
    }
    & > * {
      margin-bottom: 0;
    }
    & button {
      width: 40%;
    }
  }
`;

export { DonorSearchBox };
