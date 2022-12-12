import styled from "styled-components";

const BloodGroupInfoInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
`;
const BloodGroupInfoDeleteBtn = styled.button`
  align-self: stretch;
  background: transparent;
  color: #e11e1e;
  font-size: 25px;
  cursor: pointer;
`;
const BloodGroupInfoAddBtn = styled.button`
  display: block;
  padding: 10px 20px;
  border-radius: 5px;
  border: 2px solid #156ad8;
  background: transparent;
  color: #156ad8;
  font-size: 16px;
  cursor: pointer;
`;
const BloodGroupInfoErrorBox = styled.div`
  position: relative;
  top: -15px;
`;

export {
  BloodGroupInfoInputBox,
  BloodGroupInfoDeleteBtn,
  BloodGroupInfoAddBtn,
  BloodGroupInfoErrorBox,
};
