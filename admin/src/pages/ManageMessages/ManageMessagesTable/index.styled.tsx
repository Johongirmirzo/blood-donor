import styled from "styled-components";

const ManageMessagesTableBtn = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: transparent;
`;
const ManageMessagesTableDeleteBtn = styled(ManageMessagesTableBtn)`
  color: #ed1818;
`;
const ManageMessagesTableTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
  color: #fff;
`;

export { ManageMessagesTableTitle, ManageMessagesTableDeleteBtn };
