import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { MdOutlineBloodtype } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import { logoutUser } from "../../../redux/auth";
import { logout } from "../../../api/donor";
import { removeToken } from "../../../utils/localStorage";
import { NavbarProfileProps } from "./index.types";
import {
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

const NavbarProfile = ({ toggleMenu }: NavbarProfileProps) => {
  const dispatch = useDispatch();
  const { fullname, _id: donorId } = useSelector(
    (state: RootState) => state.authUser
  );
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const navigate = useNavigate();

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
        await logout(donorId);
        dispatch(logoutUser({}));
        if (toggleMenu) {
          toggleMenu();
        }
        removeToken();
        navigate("/login");
      } catch (err) {
        console.error(err);
      }
    })();
  };
  const handleToggleMenuClick = () => {
    if (toggleMenu) {
      toggleMenu();
    }
  };

  return (
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
      <p>{isDropDownActive ? <FaChevronUp /> : <FaChevronDown />}</p>
      <NavbarList>
        <NavbarItem>
          <NavbarLink to="/change-profile" onClick={handleToggleMenuClick}>
            <NavbarProfileIcon />
            My Profile
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/change-password" onClick={handleToggleMenuClick}>
            <NavbarChangePasswordIcon />
            Change Password
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/blood-requests" onClick={handleToggleMenuClick}>
            <MdOutlineBloodtype />
            Blood Requests
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
  );
};

export default NavbarProfile;
