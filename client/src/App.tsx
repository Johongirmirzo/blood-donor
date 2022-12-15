import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
import GlobalStyle from "./styles/GlobalStyle";

import { getAllHomePageData } from "./api/home-page";
import { storeAllHomePageData } from "./redux/home-page";
import { getAllAboutUsPageData } from "./api/about-page";
import { storeAllAboutUsPageData } from "./redux/about-us-page";
import { getAllGalleryPageData } from "./api/gallery-page";
import { storeAllGalleryPageData } from "./redux/gallery-page";
import { getAllFaqsPageData } from "./api/faq-page";
import { storeAllFaqPageData } from "./redux/faq-page";
import { getAllContactUsPageData } from "./api/contact-page";
import { storeAllContactUsPageData } from "./redux/contact-page";
import { getAllDonors } from "./api/donor";
import { storeAllDonors } from "./redux/donor";
import { getAllBloodGroups } from "./api/blood-group";
import { storeAllBloodGroups } from "./redux/blood-group";
import { getAllBloodRequirers } from "./api/blood-requirer";
import { storeAllBloodRequirers } from "./redux/blood-requirer";
import { useLogoutOnSessionExpired } from "./hooks/useLogoutOnSessionExpired";

const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const Faq = React.lazy(() => import("./pages/Faq"));
const Register = React.lazy(() => import("./pages/Register"));
const BloodRequests = React.lazy(() => import("./pages/BloodRequest"));
const ManageDonors = React.lazy(() => import("./pages/ManageDonors"));
const Donor = React.lazy(() => import("./pages/Donor"));
const Login = React.lazy(() => import("./pages/Login"));
const ChangePassword = React.lazy(() => import("./pages/ChangePassword"));
const ChangeProfile = React.lazy(() => import("./pages/ChangeProfile"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  const dispatch = useDispatch();
  const isSessionExpired = useLogoutOnSessionExpired();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetchAllHomePageData();
      await fetchAllAboutUsPageData();
      await fetchAllGalleryPageData();
      await fetchAllFaqPageData();
      await fetchAllContactUsPageData();
      await fetchAllDonors();
      await fetchAllBloodGroups();
      await fetchAllBloodRequirers();
      setIsLoading(false);
    })();
  }, []);

  const fetchAllHomePageData = async () => {
    try {
      const homePageResponse = await getAllHomePageData();
      dispatch(
        storeAllHomePageData({ homePageData: { ...homePageResponse.data } })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllAboutUsPageData = async () => {
    try {
      const aboutPageResponse = await getAllAboutUsPageData();

      dispatch(
        storeAllAboutUsPageData({
          aboutUsPageData: { ...aboutPageResponse.data },
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllGalleryPageData = async () => {
    try {
      const galleryPageResponse = await getAllGalleryPageData();
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
      const faqPageResponse = await getAllFaqsPageData();

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
    try {
      const contactPageResponse = await getAllContactUsPageData();
      dispatch(
        storeAllContactUsPageData({
          contactUsPageData: { ...contactPageResponse.data },
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllDonors = async () => {
    try {
      const donorsResponse = await getAllDonors();
      dispatch(
        storeAllDonors({
          allDonors: donorsResponse.data,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllBloodGroups = async () => {
    try {
      const bloodGroupResponse = await getAllBloodGroups();

      dispatch(
        storeAllBloodGroups({
          allBloodGroups: bloodGroupResponse.data,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllBloodRequirers = async () => {
    try {
      const bloodRequirerResponse = await getAllBloodRequirers();
      console.log("Blood Requirers", bloodRequirerResponse);
      dispatch(
        storeAllBloodRequirers({
          allBloodRequirers: bloodRequirerResponse.data,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <GlobalStyle />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/donors" element={<ManageDonors />} />
            <Route path="/blood-requests" element={<BloodRequests />} />
            <Route path="/donors/:donorId" element={<Donor />} />
            <Route path="/change-profile" element={<ChangeProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
