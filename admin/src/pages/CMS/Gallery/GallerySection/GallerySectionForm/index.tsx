import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateGallerySection } from "../../../../../redux/gallery-page";
import { updateGallerySection as editGallerySection } from "../../../../../api/gallery-page";
import gallerySectionSchema from "../../../../../schemas/gallerySectionSchema";
import { IGallerySection } from "../../../../../types/gallery-page";
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

const UpdateGalleryForm = () => {
  const dispatch = useDispatch();
  const gallerySection = useSelector(
    (state: RootState) => state.galleryPage.gallery
  );
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleUpdateGallerySectionSubmit = async (
    gallerySectionData: IGallerySection
  ) => {
    try {
      setIsLoading(true);
      const gallerySectionResponse = await editGallerySection(
        gallerySectionData
      );
      console.log("response", gallerySectionResponse.data);
      setIsLoading(false);
      dispatch(
        updateGallerySection({
          gallerySection: { ...gallerySectionResponse.data },
        })
      );
      setError(["Gallery section is updated successfully!"]);
      setIsUpdateSuccessfull(true);
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

  console.log(gallerySection);
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
          title: gallerySection.title,
          description: gallerySection.description,
        }}
        onSubmit={handleUpdateGallerySectionSubmit}
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
              {isLoading
                ? "Updating Gallery Section..."
                : "Update Gallery Section"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UpdateGalleryForm;
