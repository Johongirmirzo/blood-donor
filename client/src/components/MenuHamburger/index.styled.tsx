import styled, { css } from "styled-components";

interface MenuHamburgerProps {
  isMenuOpen: boolean;
}

const MenuHamburgerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #bcbcbc;
  cursor: pointer;
  ${(props: MenuHamburgerProps) =>
    props.isMenuOpen &&
    css`
      & > *:first-child {
        transform: rotate(45deg) translate(-2px, -2px);
      }
      & > *:nth-child(2) {
        opacity: 0;
      }
      & > *:last-child {
        transform: rotate(-45deg) translate(14px, -12px);
      }
    `};
`;
const MenuHamburgerLine = styled.div`
  width: 30px;
  height: 3px;
  background: #616161;
  transition: all 0.3s ease-out;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export { MenuHamburgerBox, MenuHamburgerLine };
