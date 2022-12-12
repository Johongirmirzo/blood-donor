import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateSponsorsSection } from "../../../../../redux/faq-page";
import { updateSponsorsSection as editSponsorsSection } from "../../../../../api/faq-page";
import gallerySectionSchema from "../../../../../schemas/gallerySectionSchema";
import { IFaqData } from "../../../../../types/faq-page";
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

const UpdateSponsorSectionForm = () => {
  const dispatch = useDispatch();
  const sponsor = useSelector((state: RootState) => state.faqPage.sponsor);
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleUpdateSponsorSectionSubmit = async (sponsorSection: IFaqData) => {
    try {
      setIsLoading(true);
      const sponsorSectionResponse = await editSponsorsSection(sponsorSection);
      console.log("response", sponsorSectionResponse.data);
      setIsLoading(false);
      dispatch(
        updateSponsorsSection({
          sponsorSection: { ...sponsorSectionResponse.data },
        })
      );
      setError(["Faq section is updated successfully!"]);
      setIsUpdateSuccessfull(true);
    } catch (err: any) {
      console.error(err.response);
      setError(["Please fill all input fields"]);
      setIsLoading(false);
      setIsUpdateSuccessfull(false);
    }
  };
  const closeAlertMessage = (index: number) => {
    setError(error.filter((_, i) => i !== index));
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
          title: sponsor.title || "",
          description: sponsor.description || "",
        }}
        onSubmit={handleUpdateSponsorSectionSubmit}
        validationSchema={gallerySectionSchema}
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

            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Updating Faq Section..." : "Update Faq Section"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UpdateSponsorSectionForm;
