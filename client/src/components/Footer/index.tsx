import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall, MdPlayArrow } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import FooterSubscribeForm from "./FooterSubscribeForm";
import {
  FooterSection,
  FooterContainer,
  FooterTop,
  FooterLogo,
  FooterValueText,
  FooterBottom,
  FooterContactList,
  FooterLinkList,
  FooterSubscribeBox,
  FooterCopyrightBox,
  FooterCopyright,
} from "./index.styled";
import WebsiteLogo from "../../assets/blood-donation-logo.png";

const Footer = () => {
  const contactInfo = useSelector(
    (state: RootState) => state.contactPage.contactInfo
  );
  const ourValue = useSelector((state: RootState) => state.homePage.value);
  return (
    <FooterSection>
      <FooterContainer>
        <FooterTop>
          <FooterLogo src={WebsiteLogo} alt="website logo" />
          <FooterValueText>{ourValue}</FooterValueText>
        </FooterTop>
        <FooterBottom>
          <div>
            <h5>CONTACT US</h5>
            <FooterContactList>
              <li>
                <AiOutlineMail />
                <div>
                  <p>{contactInfo.supportEmail}</p>
                  <p>{contactInfo.helpEmail}</p>
                </div>
              </li>
              <li>
                <FaLocationArrow />
                <p>{contactInfo.address}</p>
              </li>
              <li>
                <MdCall />
                <div>
                  <p>{contactInfo.officePhoneNumber}</p>
                  <p>{contactInfo.cellPhoneNumber}</p>
                </div>
              </li>
            </FooterContactList>
          </div>
          <div>
            <h5>QUICK LINKS</h5>
            <FooterLinkList>
              <li>
                <MdPlayArrow />
                <Link to="/">Home</Link>
              </li>
              <li>
                <MdPlayArrow />
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <MdPlayArrow />
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <MdPlayArrow />
                <Link to="/faq">Faq</Link>
              </li>
              <li>
                <MdPlayArrow />
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <MdPlayArrow />
                <Link to="/donors">Donors</Link>
              </li>
            </FooterLinkList>
          </div>
          <FooterSubscribeBox>
            <h5>SUBSCRIBE US</h5>
            <p>
              Signup for regular newsletter and stay up to date with our latest
              news.
            </p>
            <FooterSubscribeForm />
          </FooterSubscribeBox>
        </FooterBottom>
      </FooterContainer>
      <FooterCopyrightBox>
        <FooterCopyright>
          Copyright &copy; 2022 - Blood Donation. All rights reserved
        </FooterCopyright>
      </FooterCopyrightBox>
    </FooterSection>
  );
};

export default Footer;
