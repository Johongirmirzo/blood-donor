import styled, { css } from "styled-components";

const SidebarHamburgerBox = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
  cursor: pointer;
  height: 30px;

  ${(props: { isSidebarToggled: boolean }) =>
    props.isSidebarToggled &&
    css`
      left: 250px;
      & > *:first-child {
        transform: rotate(45deg) translate(6px, 7px);
      }
      & > *:nth-child(2) {
        opacity: 0;
      }
      & > *:last-child {
        transform: rotate(-45deg) translate(5px, -7px);
      }
    `};
`;
const SidebarHamburgerLine = styled.div`
  width: 40px;
  height: 4px;
  background: #fff;
  transition: all 0.3s ease-out;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export { SidebarHamburgerBox, SidebarHamburgerLine };
