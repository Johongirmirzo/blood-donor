import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillPlusSquareFill } from "react-icons/bs";

const SidebarLogoBox = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;
  padding-left: 25px;
  color: #bb0a1e;
`;
const SidebarLogoIcon = styled(BsFillPlusSquareFill)`
  font-size: 20px;
`;
const SidebarLogoTitle = styled.h2``;

export { SidebarLogoBox, SidebarLogoIcon, SidebarLogoTitle };
