import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ManageBloodGroups = lazy(() => import("./pages/ManageBloodGroups"));
const CreateBloodGroup = lazy(() => import("./pages/CreateBloodGroup"));
const EditBloodGroup = lazy(() => import("./pages/EditBloodGroup"));
const Donors = lazy(() => import("./pages/Donors"));
const ManageBloodRequirers = lazy(() => import("./pages/BloodRequirers"));
const ManageMessages = lazy(() => import("./pages/ManageMessages"));
const Subscribers = lazy(() => import("./pages/Subscribers"));
const ChangePassword = lazy(() => import("./pages/ChangePassword"));
const ChangeProfile = lazy(() => import("./pages/ChangeProfile"));
const NotFound = lazy(() => import("./pages/NotFound"));
// CMS
// Home Page
const ManageSliders = lazy(() => import("./pages/CMS/Home/Sliders"));
const CreateSlider = lazy(() => import("./pages/CMS/Home/CreateSlider"));
const EditSlider = lazy(() => import("./pages/CMS/Home/EditSlider"));
const HelpfulInfo = lazy(() => import("./pages/CMS/Home/HelpfulInfo"));
const BloodGroupInfo = lazy(() => import("./pages/CMS/Home/BloodGroupInfo"));
const Initative = lazy(() => import("./pages/CMS/Home/Initative"));
const Value = lazy(() => import("./pages/CMS/Home/Value"));
// About Us Page
const AchievementsSection = lazy(
  () => import("./pages/CMS/AboutUs/AchievementsSection")
);
const DonorReviewSection = lazy(
  () => import("./pages/CMS/AboutUs/DonorReviewSection")
);
const VolunteerSection = lazy(
  () => import("./pages/CMS/AboutUs/VolunteerSection")
);
const WhoWeAre = lazy(() => import("./pages/CMS/AboutUs/WhoWeAre"));
const AboutUsHeroImage = lazy(() => import("./pages/CMS/AboutUs/HeroImage"));
const CreateDonorReview = lazy(
  () => import("./pages/CMS/AboutUs/CreateDonorReview")
);
const EditDonorReview = lazy(
  () => import("./pages/CMS/AboutUs/EditDonorReview")
);
const ManageDonorReviews = lazy(
  () => import("./pages/CMS/AboutUs/ManageDonorReviews")
);
const CreateVolunteer = lazy(
  () => import("./pages/CMS/AboutUs/CreateVolunteer")
);
const EditVolunteer = lazy(() => import("./pages/CMS/AboutUs/EditVolunteer"));
const ManageVolunteers = lazy(
  () => import("./pages/CMS/AboutUs/ManageVolunteers")
);
// Gallery Page
const CreateGallery = lazy(() => import("./pages/CMS/Gallery/CreateGallery"));
const GallerySection = lazy(() => import("./pages/CMS/Gallery/GallerySection"));
const GalleryHeroImage = lazy(() => import("./pages/CMS/Gallery/HeroImage"));
const ManageGalleries = lazy(
  () => import("./pages/CMS/Gallery/ManageGalleries")
);
// Faq Page
const FaqSection = lazy(() => import("./pages/CMS/Faq/FaqSection"));
const SponsorSection = lazy(() => import("./pages/CMS/Faq/SponsorSection"));
const CreateFaq = lazy(() => import("./pages/CMS/Faq/CreateFaq"));
const CreateSponsor = lazy(() => import("./pages/CMS/Faq/CreateSponsor"));
const EditFaq = lazy(() => import("./pages/CMS/Faq/EditFaq"));
const FaqHeroImage = lazy(() => import("./pages/CMS/Faq/HeroImage"));
const ManageFaqs = lazy(() => import("./pages/CMS/Faq/ManageFaqs"));
const ManageSponsors = lazy(() => import("./pages/CMS/Faq/ManageSponsors"));
// Contact Page
const ContactUsHeroImage = lazy(
  () => import("./pages/CMS/ContactUs/HeroImage")
);
const ContactUsInfoSection = lazy(
  () => import("./pages/CMS/ContactUs/ContactInfoSection")
);

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <GlobalStyle />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/manage-blood-groups"
                element={<ManageBloodGroups />}
              />
              <Route
                path="/create-blood-group"
                element={<CreateBloodGroup />}
              />
              <Route
                path="/edit-blood-group/:bloodGroupId"
                element={<EditBloodGroup />}
              />
              <Route path="/donors" element={<Donors />} />
              <Route
                path="/manage-blood-requirers"
                element={<ManageBloodRequirers />}
              />
              <Route path="/manage-messages" element={<ManageMessages />} />
              <Route path="/subscribers" element={<Subscribers />} />
              <Route path="/change-profile" element={<ChangeProfile />} />
              <Route path="/change-password" element={<ChangePassword />} />

              <Route path="/cms-manage-sliders" element={<ManageSliders />} />
              <Route path="/cms-create-slider" element={<CreateSlider />} />
              <Route
                path="/cms-edit-slider/:sliderId"
                element={<EditSlider />}
              />
              <Route path="/cms-helpful-info" element={<HelpfulInfo />} />
              <Route
                path="/cms-blood-group-info"
                element={<BloodGroupInfo />}
              />
              <Route path="/cms-initiative" element={<Initative />} />
              <Route path="/cms-value" element={<Value />} />
              <Route
                path="/cms-achievements-section"
                element={<AchievementsSection />}
              />
              <Route
                path="/cms-donor-reviews-section"
                element={<DonorReviewSection />}
              />
              <Route
                path="/cms-volunteer-section"
                element={<VolunteerSection />}
              />
              <Route path="/cms-who-we-are" element={<WhoWeAre />} />
              <Route
                path="/cms-about-us-hero-image"
                element={<AboutUsHeroImage />}
              />
              <Route
                path="/cms-create-donor-review"
                element={<CreateDonorReview />}
              />
              <Route
                path="/cms-edit-donor-review/:donorReviewId"
                element={<EditDonorReview />}
              />
              <Route
                path="/cms-donor-reviews"
                element={<ManageDonorReviews />}
              />
              <Route
                path="/cms-create-volunteer"
                element={<CreateVolunteer />}
              />
              <Route
                path="/cms-edit-volunteer/:volunteerId"
                element={<EditVolunteer />}
              />
              <Route path="/cms-volunteers" element={<ManageVolunteers />} />
              <Route path="/cms-create-gallery" element={<CreateGallery />} />
              <Route path="/cms-gallery-section" element={<GallerySection />} />
              <Route
                path="/cms-gallery-hero-image"
                element={<GalleryHeroImage />}
              />
              <Route
                path="/cms-manage-galleries"
                element={<ManageGalleries />}
              />
              <Route path="/cms-faq-section" element={<FaqSection />} />
              <Route path="/cms-sponsor-section" element={<SponsorSection />} />
              <Route path="/cms-create-faq" element={<CreateFaq />} />
              <Route path="/cms-edit-faq/:faqId" element={<EditFaq />} />
              <Route path="/cms-create-sponsor" element={<CreateSponsor />} />
              <Route path="/cms-faq-hero-image" element={<FaqHeroImage />} />
              <Route path="/cms-manage-faqs" element={<ManageFaqs />} />
              <Route path="/cms-manage-sponsors" element={<ManageSponsors />} />
              <Route
                path="/cms-contact-us-hero-image"
                element={<ContactUsHeroImage />}
              />
              <Route
                path="/cms-contact-us-info-section"
                element={<ContactUsInfoSection />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
