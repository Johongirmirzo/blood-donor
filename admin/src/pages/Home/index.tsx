import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { getAllBloudGroups } from "../../api/blood-group";
import { storeAllBloodGroups } from "../../redux/blood-group";
import { getAllHomePageData } from "../../api/home-page";
import { storeAllHomePageData } from "../../redux/home-page";
import { getAllAboutUsPageData } from "../../api/about-page";
import { storeAllAboutUsPageData } from "../../redux/about-page";
import { getAllGaleryPageData } from "../../api/gallery-page";
import { storeAllGalleryPageData } from "../../redux/gallery-page";
import { getAllFaqPageData } from "../../api/faq-page";
import { storeAllFaqPageData } from "../../redux/faq-page";
import { getAllContactUsPageData } from "../../api/contact-page";
import { storeAllContactUsPageData } from "../../redux/contact-page";
import { getAllDonors, getDonor } from "../../api/donor";
import { storeAllDonors } from "../../redux/donor";
import { getAllMessages } from "../../api/message";
import { storeAllMessages } from "../../redux/message";
import { getAllBloodRequirers } from "../../api/blood-requirer";
import { storeAllBloodRequirers } from "../../redux/blood-requirer";
import { getAllSubscribers } from "../../api/subscriber";
import { storeAllSubcribers } from "../../redux/subscriber";
import { IBloodRequirerData } from "../../types/blood-requirer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useLogoutOnSessionExpired } from "../../hooks/useLogoutOnSessionExpired";
import { HomeContainer, HomeMainArea, HomeMainAreaBox } from "./index.styled";

const Home = () => {
  const { fullname } = useSelector((state: RootState) => state.admin);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isSessionExpired = useLogoutOnSessionExpired();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [location]);
  useEffect(() => {
    if (!fullname) {
      navigate("/login");
    }
  }, [fullname]);
  console.log("Fll", fullname);

  useEffect(() => {
    fetchAllBloodGroups();
    fetchAllHomePageData();
    fetchAllAboutUsPageData();
    fetchAllGalleryPageData();
    fetchAllFaqPageData();
    fetchAllContactUsPageData();
    fetchAllDonors();
    fetchAllMessages();
    fetchAllBloodRequirers();
    fetchAllSubscribers();
  }, []);
  const fetchAllBloodGroups = async () => {
    try {
      const bloodGroupResponse = await getAllBloudGroups();
      dispatch(storeAllBloodGroups({ bloodGroups: bloodGroupResponse.data }));
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllHomePageData = async () => {
    try {
      const homePageResponse = await getAllHomePageData();
      dispatch(storeAllHomePageData({ ...homePageResponse.data }));
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllAboutUsPageData = async () => {
    try {
      const aboutUsPageResponse = await getAllAboutUsPageData();
      dispatch(
        storeAllAboutUsPageData({
          aboutUsPageData: { ...aboutUsPageResponse.data },
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllGalleryPageData = async () => {
    try {
      const galleryPageResponse = await getAllGaleryPageData();
      dispatch(
        storeAllGalleryPageData({
          galleryPageData: { ...galleryPageResponse.data },
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllFaqPageData = async () => {
    try {
      const faqPageResponse = await getAllFaqPageData();
      dispatch(
        storeAllFaqPageData({
          faqPageData: { ...faqPageResponse.data },
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllContactUsPageData = async () => {
    console.log(1111);
    try {
      const contactUsPageResponse = await getAllContactUsPageData();
      dispatch(
        storeAllContactUsPageData({
          contactUsPageData: { ...contactUsPageResponse.data },
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllDonors = async () => {
    try {
      const donorPageResponse = await getAllDonors();
      dispatch(
        storeAllDonors({
          allDonors: donorPageResponse.data,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllMessages = async () => {
    try {
      const messageResponse = await getAllMessages();
      dispatch(
        storeAllMessages({
          allMessages: messageResponse.data,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllBloodRequirers = async () => {
    try {
      const bloodRequirerResponse = await getAllBloodRequirers();
      const bloodRequirerMap = bloodRequirerResponse.data.map(
        async (bloodRequirer: IBloodRequirerData) =>
          getDonor(bloodRequirer.donorId)
      );
      Promise.all(bloodRequirerMap).then((res) => {
        const data = res.map(({ data }, index) => {
          return {
            _id: bloodRequirerResponse.data[index]._id,
            fullname: bloodRequirerResponse.data[index].fullname,
            phoneNumber: bloodRequirerResponse.data[index].phoneNumber,
            email: bloodRequirerResponse.data[index].email,
            blodNeededFor: bloodRequirerResponse.data[index].bloodNeededFor,
            message: bloodRequirerResponse.data[index].message,
            donorFullname: data.fullname,
            donorPhoneNumber: data.phoneNumber,
            donorEmail: data.email,
            donorBloodGroup: data.bloodGroup,
          };
        });

        dispatch(storeAllBloodRequirers({ allBloodRequirers: data }));
      });
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllSubscribers = async () => {
    try {
      const subscriberResponse = await getAllSubscribers();

      dispatch(
        storeAllSubcribers({
          allSubcribers: subscriberResponse.data,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <HomeContainer>
      <Sidebar />
      <HomeMainArea>
        <Navbar />
        <HomeMainAreaBox>
          <Outlet />
        </HomeMainAreaBox>
      </HomeMainArea>
    </HomeContainer>
  );
};

export default Home;
