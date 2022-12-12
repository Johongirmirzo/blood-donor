import styled from "styled-components";

const SubscribersTableBtn = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: transparent;
`;

const SubscribersTableDeleteBtn = styled(SubscribersTableBtn)`
  color: #ed1818;
`;
const SubscribersTableTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(3vw + 1rem), 2rem);
  color: #fff;
`;

export { SubscribersTableDeleteBtn, SubscribersTableTitle };
