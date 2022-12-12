import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateFaqsSection } from "../../../../../redux/faq-page";
import { updateFaqsSection as editFaqsSection } from "../../../../../api/faq-page";
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

const UpdateFaqSectionForm = () => {
  const dispatch = useDispatch();
  const faqSection = useSelector((state: RootState) => state.faqPage.faq);
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleUpdateFaqSectionSubmit = async (faqSectionData: IFaqData) => {
    try {
      setIsLoading(true);
      const faqSectionResponse = await editFaqsSection(faqSectionData);
      console.log("response", faqSectionResponse.data);
      setIsLoading(false);
      dispatch(
        updateFaqsSection({
          faqSection: { ...faqSectionResponse.data },
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
  console.log(faqSection);
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
          title: faqSection.title || "",
          description: faqSection.description || "",
        }}
        onSubmit={handleUpdateFaqSectionSubmit}
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

export default UpdateFaqSectionForm;
