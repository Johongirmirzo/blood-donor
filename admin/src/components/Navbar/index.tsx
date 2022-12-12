import React, { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeAdmin } from "../../redux/admin";
import type { RootState } from "../../redux/store";
import { logout } from "../../api/admin";
import { removeToken } from "../../utils/localStorage";
import ToggleFullScreen from "../ToggleFullScreen";
import {
  NavbarHeader,
  NavbarCircleBox,
  NavbarIconBox,
  NavbarTextBox,
  NavbarIcon,
  NavbarList,
  NavbarItem,
  NavbarLink,
  NavbarText,
  NavbarProfileIcon,
  NavbarChangePasswordIcon,
  NavbarLogoutIcon,
} from "./index.styled";

const Navbar = () => {
  const dispatch = useDispatch();
  const { fullname } = useSelector((state: RootState) => state.admin);
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  useEffect(() => {
    const body = document.body;
    const closeDropDownMenu = () => {
      if (isDropDownActive) {
        setIsDropDownActive(false);
      }
    };
    if (isDropDownActive) {
      body.addEventListener("click", closeDropDownMenu);
    }
    return () => {
      body.removeEventListener("click", closeDropDownMenu);
    };
  }, [isDropDownActive]);

  const toggleDropdownMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDropDownActive(!isDropDownActive);
  };

  const handleLogoutClick = () => {
    (async () => {
      try {
        await logout();
        removeToken();
        dispatch(removeAdmin({}));
      } catch (err) {
        console.error(err);
      }
    })();
  };

  return (
    <NavbarHeader>
      <ToggleFullScreen />
      <NavbarCircleBox
        className={isDropDownActive ? "dropdown-active" : ""}
        onClick={toggleDropdownMenu}
      >
        <NavbarIconBox>
          <NavbarIcon />
        </NavbarIconBox>
        <NavbarTextBox>
          <p>Welcome</p>
          <p>{fullname}</p>
        </NavbarTextBox>
        {isDropDownActive ? <FaChevronUp /> : <FaChevronDown />}
        <NavbarList>
          <NavbarItem>
            <NavbarLink to="/change-profile">
              <NavbarProfileIcon />
              My Profile
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/change-password">
              <NavbarChangePasswordIcon />
              Change Password
            </NavbarLink>
          </NavbarItem>
          <NavbarItem onClick={handleLogoutClick}>
            <NavbarText>
              <NavbarLogoutIcon />
              Logout
            </NavbarText>
          </NavbarItem>
        </NavbarList>
      </NavbarCircleBox>
    </NavbarHeader>
  );
};

export default Navbar;
