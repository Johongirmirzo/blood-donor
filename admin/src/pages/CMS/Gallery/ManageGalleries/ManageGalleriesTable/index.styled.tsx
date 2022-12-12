import styled from "styled-components";

const ManageGalleriesTableBtnBox = styled.div`
  display: flex;
  align-items;
`;

const ManageGalleriesTableBtn = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: transparent;
`;
const ManageGalleryTableImg = styled.img`
  width: 50px;
`;
const ManageGalleriesTableDeleteBtn = styled(ManageGalleriesTableBtn)`
  color: #ed1818;
`;
const ManageGalleriesTableTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, calc(3vw + 1rem), 2rem);
  color: #fff;
`;

export {
  ManageGalleriesTableBtnBox,
  ManageGalleryTableImg,
  ManageGalleriesTableDeleteBtn,
  ManageGalleriesTableTitle,
};
