import React from "react";
import { MdOutlineRateReview } from "react-icons/md";
import CreateDonorReviewForm from "./CreateDonorReviewForm";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const CreateDonorReview = () => {
  return (
    <Container>
      <Header>
        <PageLink
          LinkIcon={MdOutlineRateReview}
          routeTo="/cms-donor-reviews"
          linkText="Go Back To All Donor Reviews"
        />
        <Title>Create A Donor Review</Title>
      </Header>
      <Box>
        <CreateDonorReviewForm />
      </Box>
    </Container>
  );
};

export default CreateDonorReview;
