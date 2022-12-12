import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateDonorReviewSection } from "../../../../../redux/about-page";
import { updateDonorReviewSection as editDonorReviewSection } from "../../../../../api/about-page";
import donorReviewSectionSchema from "../../../../../schemas/donorReviewSectionSchema";
import { IDonorReviewSection } from "../../../../../types/about-us-page";
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

const HelpfulInfoForm = () => {
  const dispatch = useDispatch();
  const donorReviews = useSelector(
    (state: RootState) => state.aboutUsPage.donorReviews
  );

  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleUpdateDonorReviewSectionSubmit = async (
    donorReviewSectionData: IDonorReviewSection,
    imageFile: any
  ) => {
    try {
      const imageTypes = ["webp", "jpeg", "jpg", "png", "svg"];

      if (!imageTypes.includes(imageFile[0].type.split("/")[1])) {
        if (imageFile[0].size > 1000000) {
          setError([
            "You can only upload images of types: webp, jpeg, jpg, png, svg",
            "Maximum allowed image file size is 1mb",
          ]);
        } else {
          setError([
            "You can only upload images of types: webp, jpeg, jpg, png, svg",
          ]);
        }
      } else {
        const formData = new FormData();
        formData.append("donor-review-hero-image", imageFile[0]);
        formData.append("title", donorReviewSectionData.title);
        formData.append("description", donorReviewSectionData.description);

        setIsLoading(true);
        const donorReviewSectionResponse = await editDonorReviewSection(
          formData
        );
        console.log("response", donorReviewSectionResponse.data);
        setIsLoading(false);
        dispatch(
          updateDonorReviewSection({
            donorReviewsSection: { ...donorReviewSectionResponse.data },
          })
        );
        setError(["Donor review section is updated successfully!"]);
        setIsUpdateSuccessfull(true);
      }
    } catch (err: any) {
      console.error(err.response);
      setError(["Please fill all input fields"]);
      setIsLoading(false);
      setIsUpdateSuccessfull(false);
    }
  };
  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  console.log(donorReviews);
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
          title: donorReviews.title,
          description: donorReviews.description,
          donorReviewHeroImage: "",
        }}
        onSubmit={(donorReviewSectionData) => {
          console.log(donorReviewSectionData);
          const donorReviewSectionImageInput = document.getElementById(
            "donorReviewHeroImage"
          ) as HTMLInputElement;
          handleUpdateDonorReviewSectionSubmit(
            donorReviewSectionData,
            donorReviewSectionImageInput.files
          );
        }}
        validationSchema={donorReviewSectionSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <FormInput
                type="text"
                id="title"
                placeholder="Enter Title"
                name="title"
                onChange={handleChange}
                value={values.title}
              />
              {errors.title && touched.title ? (
                <FormFieldError>{errors.title}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <FormInput
                type="text"
                id="description"
                placeholder="Enter Description"
                name="description"
                onChange={handleChange}
                value={values.description}
              />
              {errors.description && touched.description ? (
                <FormFieldError>{errors.description}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="donorReviewHeroImage">Choose Image</FormLabel>
              <FormInput
                type="file"
                id="donorReviewHeroImage"
                name="donorReviewHeroImage"
                onChange={handleChange}
                value={values.donorReviewHeroImage}
              />
              {errors.donorReviewHeroImage && touched.donorReviewHeroImage ? (
                <FormFieldError>{errors.donorReviewHeroImage}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading
                ? "Updating Donor Review Section..."
                : "Update Donor Review Section"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default HelpfulInfoForm;
