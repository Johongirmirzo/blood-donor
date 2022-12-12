import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addDonorReview } from "../../../../../redux/about-page";
import { createDonorReview } from "../../../../../api/about-page";
import { IDonorData } from "../../../../../types/about-us-page";
import donorReviewSchema from "../../../../../schemas/donorReviewSchema";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
  FormFieldError,
} from "../../../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../../../styles/UI/Alert/index.styled";

const CreateDonorReviewForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleCreateDonorReviewSubmit = async (donorReviewData: IDonorData) => {
    try {
      setIsLoading(true);
      const donorReviewResponse = await createDonorReview(donorReviewData);
      console.log(donorReviewResponse);

      dispatch(
        addDonorReview({ newDonoReview: { ...donorReviewResponse.data } })
      );
      navigate("/cms-donor-reviews");
      setIsLoading(false);
      setIsUpdateSuccessfull(true);
    } catch (err: any) {
      setError([err.response.data.error]);
      setIsLoading(false);
      setIsUpdateSuccessfull(false);
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  return (
    <>
      {error &&
        error.map((err, index) => (
          <Alert success={isUpdateSuccessfull}>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}
      <Formik
        initialValues={{
          donorReview: "",
          donorName: "",
          donorProfession: "",
          donorLocation: "",
        }}
        onSubmit={(donorReviewData) => {
          handleCreateDonorReviewSubmit(donorReviewData);
        }}
        validationSchema={donorReviewSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="donorName">Donor Name</FormLabel>
              <FormInput
                type="text"
                id="donorName"
                placeholder="Enter Donor Name"
                name="donorName"
                onChange={handleChange}
                value={values.donorName}
              />
              {errors.donorName && touched.donorName ? (
                <FormFieldError>{errors.donorName}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="donorProfession">Donor Profession</FormLabel>
              <FormInput
                type="text"
                id="donorProfession"
                placeholder="Enter Donor Profession"
                name="donorProfession"
                onChange={handleChange}
                value={values.donorProfession}
              />
              {errors.donorProfession && touched.donorProfession ? (
                <FormFieldError>{errors.donorProfession}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="donorLocation">Donor Location</FormLabel>
              <FormInput
                type="text"
                id="donorLocation"
                placeholder="Enter Donor Location"
                name="donorLocation"
                onChange={handleChange}
                value={values.donorLocation}
              />
              {errors.donorLocation && touched.donorLocation ? (
                <FormFieldError>{errors.donorLocation}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="donorReview">Donor Review</FormLabel>
              <FormTextArea
                id="donorReview"
                placeholder="Enter Donor Review"
                name="donorReview"
                onChange={handleChange}
                value={values.donorReview}
              />
              {errors.donorReview && touched.donorReview ? (
                <FormFieldError>{errors.donorReview}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Creating Donor Review..." : "Create Donor Review"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateDonorReviewForm;
