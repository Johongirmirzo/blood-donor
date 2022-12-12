import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import NavbarProfile from "../NavbarProfile";
import MenuHamburger from "../../MenuHamburger";
import { MobileMenuProps } from "./index.types";
import {
  MobileMenuOverlay,
  MobileMenuTop,
  MobileMenuBox,
  MobileMenuHamburgerBox,
  MobileMenuNav,
  MobileMenuList,
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuLoginBtn,
  MobileMenuRegisterBtn,
} from "./index.styled";

const MobileMenu = ({ toggleMenu, isMenuOpen }: MobileMenuProps) => {
  const authUser = useSelector((state: RootState) => state.authUser);

  const handleToggleMenuClick = () => toggleMenu();
  return (
    <MobileMenuOverlay>
      <MobileMenuBox>
        <MobileMenuTop>
          {authUser.fullname && <NavbarProfile toggleMenu={toggleMenu} />}
          <MobileMenuHamburgerBox>
            <MenuHamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          </MobileMenuHamburgerBox>
        </MobileMenuTop>
        <MobileMenuNav>
          <MobileMenuList>
            <MobileMenuItem onClick={handleToggleMenuClick}>
              <MobileMenuLink to="/">Home</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem onClick={handleToggleMenuClick}>
              <MobileMenuLink to="/about-us">About Us</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem onClick={handleToggleMenuClick}>
              <MobileMenuLink to="/donors">Donors</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem onClick={handleToggleMenuClick}>
              <MobileMenuLink to="/gallery">Gallery</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem onClick={handleToggleMenuClick}>
              <MobileMenuLink to="/faq">Faq</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem onClick={handleToggleMenuClick}>
              <MobileMenuLink to="/contact-us">Contact Us</MobileMenuLink>
            </MobileMenuItem>
            {!authUser.fullname && (
              <>
                <MobileMenuItem onClick={handleToggleMenuClick}>
                  <Link to="/login">
                    <MobileMenuLoginBtn>Login</MobileMenuLoginBtn>
                  </Link>
                </MobileMenuItem>
                <MobileMenuItem onClick={handleToggleMenuClick}>
                  <Link to="/register">
                    <MobileMenuRegisterBtn>Become Donor</MobileMenuRegisterBtn>
                  </Link>
                </MobileMenuItem>
              </>
            )}
          </MobileMenuList>
        </MobileMenuNav>
      </MobileMenuBox>
    </MobileMenuOverlay>
  );
};

export default MobileMenu;
