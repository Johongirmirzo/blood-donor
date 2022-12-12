import styled from "styled-components";

const ManageFaqsTableBtnBox = styled.div`
  display: flex;
  align-items;
`;
const ManageFaqsTableBtn = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: transparent;
`;
const ManageFaqsEditBtn = styled(ManageFaqsTableBtn)`
  & a {
    margin-right: 20px;
    color: #6777ef;
  }
`;
const ManageFaqsTableDeleteBtn = styled(ManageFaqsTableBtn)`
  color: #ed1818;
`;
const ManageFaqsTableTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, calc(3vw + 1rem), 2rem);
  color: #fff;
`;

export {
  ManageFaqsTableBtnBox,
  ManageFaqsEditBtn,
  ManageFaqsTableDeleteBtn,
  ManageFaqsTableTitle,
};
