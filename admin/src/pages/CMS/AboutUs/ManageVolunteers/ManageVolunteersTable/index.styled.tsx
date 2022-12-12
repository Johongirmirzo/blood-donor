import styled from "styled-components";

const ManageVolunteerTableImage = styled.img`
  width: 50px;
`;
const ManageVolunteersTableBtnBox = styled.div`
  display: flex;
  align-items;
`;

const ManageVolunteersTableBtn = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: transparent;
`;
const ManageVolunteersTableEditBtn = styled(ManageVolunteersTableBtn)`
  & a {
    margin-right: 20px;
    color: #6777ef;
  }
`;
const ManageVolunteersTableDeleteBtn = styled(ManageVolunteersTableBtn)`
  color: #ed1818;
`;
const ManageVolunteersTableTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, calc(3vw + 1rem), 2rem);
  color: #fff;
`;

export {
  ManageVolunteerTableImage,
  ManageVolunteersTableBtnBox,
  ManageVolunteersTableEditBtn,
  ManageVolunteersTableDeleteBtn,
  ManageVolunteersTableTitle,
};
