import React from "react";
import { MdOutlineRateReview } from "react-icons/md";
import EditDonorReviewForm from "./EditDonorReviewForm";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const EditDonorReview = () => {
  return (
    <Container>
      <Header>
        <PageLink
          LinkIcon={MdOutlineRateReview}
          routeTo="/cms-donor-reviews"
          linkText="Go Back To All Donor Reviews"
        />
        <Title>Edit A Donor Review</Title>
      </Header>
      <Box>
        <EditDonorReviewForm />
      </Box>
    </Container>
  );
};

export default EditDonorReview;
