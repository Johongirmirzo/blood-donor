import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdAlternateEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import WebsiteLogo from "../../assets/blood-donation-logo.png";
import { useMobile } from "../../hooks/useMobile";
import MenuHamburger from "../../components/MenuHamburger";
import NavbarProfile from "./NavbarProfile";
import MobileMenu from "./MobileMenu";
import {
  NavbarHeader,
  NavbarHeaderBox,
  NavbarHeaderTop,
  NavbarHeaderBottom,
  NavbarHeaderLogo,
  NavbarHeaderNav,
  NavbarHeaderList,
  NavbarHeaderItem,
  NavbarHeaderLink,
  NavbarHeaderImg,
  NavbarLoginBtn,
  NavbarBtn,
} from "./index.styled";

const Navbar = () => {
  const contactInfo = useSelector((state: RootState) => state.contactPage);
  const { fullname } = useSelector((state: RootState) => state.authUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarSlided, setIsNavbarSlided] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const getScrollPosition = () => {
      if (window.scrollY >= 150) {
        setIsNavbarSlided(true);
      } else {
        setIsNavbarSlided(false);
      }
    };

    window.addEventListener("scroll", getScrollPosition);
    return () => window.removeEventListener("scroll", getScrollPosition);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavbarHeader>
      <NavbarHeaderTop isNavbarSlided={isNavbarSlided}>
        <NavbarHeaderBox>
          <div>
            <address>
              <HiOutlineBuildingOffice2 />
              {contactInfo.contactInfo.address}
            </address>
            <address>
              <IoCallOutline />
              {contactInfo.contactInfo.cellPhoneNumber}
            </address>
          </div>
          <address>
            <MdAlternateEmail />
            {contactInfo.contactInfo.helpEmail}
          </address>
        </NavbarHeaderBox>
      </NavbarHeaderTop>
      <NavbarHeaderBottom isNavbarSlided={isNavbarSlided}>
        <NavbarHeaderBox>
          <NavbarHeaderLogo to="/">
            <NavbarHeaderImg src={WebsiteLogo} alt="website logo" />
          </NavbarHeaderLogo>
          {!isMobile ? (
            <NavbarHeaderNav>
              <NavbarHeaderList>
                <NavbarHeaderItem>
                  <NavbarHeaderLink to="/">Home</NavbarHeaderLink>
                </NavbarHeaderItem>
                <NavbarHeaderItem>
                  <NavbarHeaderLink to="/about-us">About Us</NavbarHeaderLink>
                </NavbarHeaderItem>
                <NavbarHeaderItem>
                  <NavbarHeaderLink to="/donors">Donors</NavbarHeaderLink>
                </NavbarHeaderItem>
                <NavbarHeaderItem>
                  <NavbarHeaderLink to="/gallery">Gallery</NavbarHeaderLink>
                </NavbarHeaderItem>
                <NavbarHeaderItem>
                  <NavbarHeaderLink to="/faq">Faq</NavbarHeaderLink>
                </NavbarHeaderItem>
                <NavbarHeaderItem>
                  <NavbarHeaderLink to="/contact-us">
                    Contact Us
                  </NavbarHeaderLink>
                </NavbarHeaderItem>
                {fullname ? (
                  <NavbarProfile />
                ) : (
                  <>
                    <NavbarHeaderItem>
                      <Link to="/login">
                        <NavbarLoginBtn>Login</NavbarLoginBtn>
                      </Link>
                    </NavbarHeaderItem>
                    <NavbarHeaderItem>
                      <Link to="/register">
                        <NavbarBtn>Become Donor</NavbarBtn>
                      </Link>
                    </NavbarHeaderItem>
                  </>
                )}
              </NavbarHeaderList>
            </NavbarHeaderNav>
          ) : (
            <>
              <MenuHamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
              {isMenuOpen && (
                <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
              )}
            </>
          )}
        </NavbarHeaderBox>
      </NavbarHeaderBottom>
    </NavbarHeader>
  );
};

export default Navbar;
