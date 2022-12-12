import styled from "styled-components";

const CreateVolunteerFormInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
`;
const CreateVolunteerFormDeleteBtn = styled.button`
  align-self: stretch;
  background: transparent;
  color: #e11e1e;
  font-size: 25px;
  cursor: pointer;
`;
const CreateVolunteerFormAddBtn = styled.button`
  display: block;
  padding: 10px 20px;
  border-radius: 5px;
  border: 2px solid #156ad8;
  background: transparent;
  color: #156ad8;
  font-size: 16px;
  cursor: pointer;
`;
const CreateVolunteerFormErrorBox = styled.div`
  position: relative;
  top: -15px;
`;

export {
  CreateVolunteerFormInputBox,
  CreateVolunteerFormDeleteBtn,
  CreateVolunteerFormAddBtn,
  CreateVolunteerFormErrorBox,
};
