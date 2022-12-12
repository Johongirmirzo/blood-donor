import styled, { css } from "styled-components";

interface SidebarAsideProps {
  isMobile: boolean;
  isSidebarToggled: boolean;
}

const SidebarAside = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  min-height: 100vh;
  padding: 10px 5px;
  min-width: 80px;
  max-width: 80px;
  background: #1a202e;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-out;
  overflow: hidden;
  @media (min-width: 750px) {
    min-width: 300px;
    max-width: 300px;
    padding: 20px 10px;
    overflow-y: scroll;
  }
  ${(props: SidebarAsideProps) =>
    props.isMobile &&
    css`
      & > *:not(:first-child) {
        visibility: hidden;
      }
    `}
  ${(props: SidebarAsideProps) =>
    props.isSidebarToggled &&
    css`
      position: fixed;
      min-width: 300px;
      max-width: 300px;
      overflow-y: scroll;
      z-index: 99;

      & > *:not(:first-child) {
        visibility: visible;
      }
    `}
  &::-webkit-scrollbar {
    width: 10px;
    height: 20px;
    border-radius: 30px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #1a202e;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: hsl(0, 0.4291845493562217%, 45.68627450980392%);
    width: 20px;
    height: 20px;
    border-radius: 30px;
  }
`;
const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 300px;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  backround: red;
  background: rgba(0, 0, 0, 0.8);
`;

const SidebarNav = styled.nav``;
const SidebarNavList = styled.ul`
  list-style: none;

  /* li:nth-child(6) {
    border-bottom: 1px solid #dadada62;
    padding-bottom: 30px;
  } */
`;
export { SidebarAside, SidebarNav, SidebarNavList, SidebarOverlay };
