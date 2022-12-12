import styled from "styled-components";

const ManageSponsorsTableBtnBox = styled.div`
  display: flex;
  align-items;
`;
const ManageSponsorsTableBtn = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: transparent;
`;
const ManageSponsorsTableImg = styled.img`
  width: 50px;
`;
const ManageSponsorsTableDeleteBtn = styled(ManageSponsorsTableBtn)`
  color: #ed1818;
`;
const ManageSponsorsTableTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, calc(3vw + 1rem), 2rem);
  color: #fff;
`;

export {
  ManageSponsorsTableBtnBox,
  ManageSponsorsTableImg,
  ManageSponsorsTableDeleteBtn,
  ManageSponsorsTableTitle,
};
