import styled from "styled-components";

const ManageBlooGroupBtn = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: transparent;
`;
const ManageBlooGroupEditBtn = styled(ManageBlooGroupBtn)`
  & a {
    margin-right: 20px;
    color: #6777ef;
  }
`;
const ManageBlooGroupDeleteBtn = styled(ManageBlooGroupBtn)`
  color: #ed1818;
`;
const ManageBloodGroupTableTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(3vw + 1rem), 2rem);
  color: #fff;
`;

export {
  ManageBlooGroupEditBtn,
  ManageBlooGroupDeleteBtn,
  ManageBloodGroupTableTitle,
};
