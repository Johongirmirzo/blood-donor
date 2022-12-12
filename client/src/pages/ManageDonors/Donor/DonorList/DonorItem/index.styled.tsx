import styled from "styled-components";

const DonorItemCard = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const DonorItemIconBox = styled.div`
  font-size: 150px;
  text-align: center;
`;
const DonorItemBody = styled.div`
  padding: 20px;
  background: #f9f9f9;
`;
const DonorItemName = styled.p`
  position: absolute;
  left: 0;
  top: 145px;
  display: inline-block;
  margin-bottom: 10px;
  padding: 10px 20px;
  background: #757575;
  font-size: 20px;
  color: #fff;
`;
const DonorItemGender = styled.p`
  font-size: 18px;
  margin: 15px 0 25px 0;
`;
const DonorItemBloodType = styled.p`
  color: #666;
  margin-bottom: 10px;
`;
const DonorItemBtn = styled.button`
  padding: 15px 20px;
  background: #ef3d32;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background: hsl(3, 85%, 52%);
  }
`;

export {
  DonorItemCard,
  DonorItemIconBox,
  DonorItemBody,
  DonorItemName,
  DonorItemGender,
  DonorItemBloodType,
  DonorItemBtn,
};
