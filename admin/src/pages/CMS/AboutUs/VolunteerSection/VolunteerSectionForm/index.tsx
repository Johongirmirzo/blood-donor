import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateVolunteerSection } from "../../../../../redux/about-page";
import { updateVolunteerSection as editVolunteerSection } from "../../../../../api/about-page";
import volunteerSectionSchema from "../../../../../schemas/volunteerSectionSchema";
import { IVolunteerSection } from "../../../../../types/about-us-page";
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

const VolunteerForm = () => {
  const dispatch = useDispatch();
  const volunteers = useSelector(
    (state: RootState) => state.aboutUsPage.volunteers
  );

  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleUpdateVolunteerSectionSubmit = async (
    donorReviewSectionData: IVolunteerSection,
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
        formData.append("volunteer-hero-image", imageFile[0]);
        formData.append("title", donorReviewSectionData.title);
        formData.append("description", donorReviewSectionData.description);

        setIsLoading(true);
        const volunteerSectionResponse = await editVolunteerSection(formData);
        console.log("response", volunteerSectionResponse.data);
        setIsLoading(false);
        dispatch(
          updateVolunteerSection({
            volunteerSection: { ...volunteerSectionResponse.data },
          })
        );
        setError(["Volunteer section is updated successfully!"]);
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

  console.log(volunteers);
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
          title: volunteers.title,
          description: volunteers.description,
          volunteerHeroImage: "",
        }}
        onSubmit={(donorReviewSectionData) => {
          console.log(donorReviewSectionData);
          const donorReviewSectionImageInput = document.getElementById(
            "volunteerHeroImage"
          ) as HTMLInputElement;
          handleUpdateVolunteerSectionSubmit(
            donorReviewSectionData,
            donorReviewSectionImageInput.files
          );
        }}
        validationSchema={volunteerSectionSchema}
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
              <FormLabel htmlFor="volunteerHeroImage">Choose Image</FormLabel>
              <FormInput
                type="file"
                id="volunteerHeroImage"
                name="volunteerHeroImage"
                onChange={handleChange}
                value={values.volunteerHeroImage}
              />
              {errors.volunteerHeroImage && touched.volunteerHeroImage ? (
                <FormFieldError>{errors.volunteerHeroImage}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading
                ? "Updating Volunteer Section..."
                : "Update Volunteer Section"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default VolunteerForm;
