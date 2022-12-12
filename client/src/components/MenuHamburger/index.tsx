import React from "react";
import { MenuHamburgerBox, MenuHamburgerLine } from "./index.styled";
import { MenuHamburgerProps } from "./index.types";

const MenuHamburger = ({ toggleMenu, isMenuOpen }: MenuHamburgerProps) => {
  return (
    <MenuHamburgerBox onClick={toggleMenu} isMenuOpen={isMenuOpen}>
      <MenuHamburgerLine />
      <MenuHamburgerLine />
      <MenuHamburgerLine />
    </MenuHamburgerBox>
  );
};

export default MenuHamburger;
