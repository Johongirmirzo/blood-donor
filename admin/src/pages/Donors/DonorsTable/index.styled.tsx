import styled from "styled-components";

const DonorsTableBtn = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: transparent;
`;
const DonorsTableToggleBtn = styled(DonorsTableBtn)`
  margin-right: 20px;
  color: #6777ef;
`;
const DonorsTableDeleteBtn = styled(DonorsTableBtn)`
  color: #ed1818;
`;
const DonorsTableTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
  color: #fff;
`;

export { DonorsTableTitle, DonorsTableToggleBtn, DonorsTableDeleteBtn };
