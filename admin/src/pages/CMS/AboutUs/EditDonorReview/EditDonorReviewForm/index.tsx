import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateDonorReview } from "../../../../../redux/about-page";
import { editDonorReview } from "../../../../../api/about-page";
import { IDonorData, IDonorList } from "../../../../../types/about-us-page";
import donorReviewSchema from "../../../../../schemas/donorReviewSchema";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../../../styles/UI/Alert/index.styled";

const EditDonorReviewForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const donorReviews = useSelector(
    (state: RootState) => state.aboutUsPage.donorReviews.donors
  );
  const { donorReviewId } = useParams();
  const [donorReview, setDonorReview] = useState({} as IDonorList);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    if (donorReviewId) {
      setDonorReview(
        donorReviews.filter(
          (donorReview) => donorReview._id === donorReviewId
        )[0]
      );
    }
  }, [donorReviewId, donorReviews]);

  const handleEditDonorReviewSubmit = async (donorReviewData: IDonorData) => {
    try {
      if (donorReviewId) {
        setIsLoading(true);
        const donorReviewResponse = await editDonorReview(
          donorReviewData,
          donorReviewId
        );
        console.log(donorReviewResponse);

        dispatch(
          updateDonorReview({
            editedDonorReview: { ...donorReviewResponse.data },
          })
        );
        navigate("/cms-donor-reviews");
        setIsLoading(false);
        setIsUpdateSuccessfull(true);
      }
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
      {donorReview?.donorName && (
        <Formik
          initialValues={{
            donorReview: donorReview.donorReview || "",
            donorName: donorReview.donorName || "",
            donorProfession: donorReview.donorProfession || "",
            donorLocation: donorReview.donorLocation || "",
          }}
          onSubmit={(donorReviewData) => {
            handleEditDonorReviewSubmit(donorReviewData);
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
                <FormLabel htmlFor="donorProfession">
                  Donor Profession
                </FormLabel>
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
                <FormInput
                  type="text"
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
                {isLoading ? "Updating Donor Review..." : "Update Donor Review"}
              </FormButton>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default EditDonorReviewForm;
