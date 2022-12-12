import styled, { css } from "styled-components";

interface FooterSubscribeBoxProps {
  isLoading: boolean;
}

const FooterSubscribeBox = styled.div`
  ${(props: FooterSubscribeBoxProps) =>
    props.isLoading &&
    css`
      & div {
        & button {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    `}
`;
const FooterSubscriberInputBox = styled.div`
  & input {
    display: block;
    padding: 16px 10px;
    width: 100%;
    background: #444;
    outline: transparent;
    color: #fff;
    font-size: 16px;
    border: 0;
    &::placeholder {
      color: #f7f7f7;
    }
  }
  & button {
    margin-top: 20px;
    padding: 15px 20px;
    background: #ef3d32;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover {
      background: hsl(3, 85%, 52%);
    }
  }
`;
export { FooterSubscribeBox, FooterSubscriberInputBox };
