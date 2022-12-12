import styled from "styled-components";
import { Link } from "react-router-dom";

const DashboardCard = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 20px;
  background: #1a202e;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
`;
const DashboardCardBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #fff;
`;
const DashboardCardTextBox = styled.div``;
const DashboardCardTitle = styled.p`
  font-size: 20px;
`;
const DashboardCardText = styled.p`
  margin-top: 10px;
  font-size: 25px;
  text-align: right;
`;
const DashboardCardIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  font-size: 30px;
  background: hsl(222, 27%, 12%);
`;
const DashboardCardLinkBtn = styled(Link)`
  position: absolute;
  left: 0;
  right: 0;
  padding: 10px;
  color: #2580ff;
  font-size: 17px;
  text-align: center;
  background: hsl(222, 27%, 22%);
`;

export {
  DashboardCard,
  DashboardCardBody,
  DashboardCardTextBox,
  DashboardCardTitle,
  DashboardCardText,
  DashboardCardIconBox,
  DashboardCardLinkBtn,
};
