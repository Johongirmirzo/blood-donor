import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateHeroImage } from "../../../../../redux/contact-page";
import { updateHeroImage as editHeroImage } from "../../../../../api/contact-page";
import heroImageSchema from "../../../../../schemas/heroImageSchema";
import { useUpdateImage } from "../../../../../hooks/useUpdateImage";
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
import {
  ContactUsHeroImage,
  ContactUsHeroImageText,
  ContactUsHeroImageBox,
  ContactUsHeroImageEnableBtn,
  ContactUsHeroImageDisableBtn,
} from "./index.styled";

const HeroImageForm = () => {
  const dispatch = useDispatch();
  const heroImage = useSelector(
    (state: RootState) => state.contactUsPage.heroImage
  );
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);
  const {
    isHideImage,
    isUpdateHeroImageEnabled,
    handleEnableHeroImageUpdateClick,
    handleDisableHeroImageUpdateClick,
    handleResetToPreviousStepClick,
  } = useUpdateImage();

  const handleUpdateHeroImageSubmit = async (imageFile: any) => {
    try {
      const imageTypes = ["webp", "jpeg", "jpg", "png", "svg"];
      console.log(imageFile[0]);
      console.log(imageFile[0].type.split("/"));
      if (!imageTypes.includes(imageFile[0].type.split("/")[1])) {
        setError([
          "You can only upload images of types: webp, jpeg, jpg, png, svg",
        ]);
      } else if (imageFile[0].size > 1000000) {
        setError(["File is too large! Maximum allowed image file size is 1mb"]);
      } else {
        const formData = new FormData();
        formData.append("contact-us-hero-image", imageFile[0]);
        setIsLoading(true);
        const heroImageResponse = await editHeroImage(formData);
        console.log("response", heroImageResponse.data);
        setIsLoading(false);
        dispatch(
          updateHeroImage({
            heroImage: heroImageResponse.data,
          })
        );
        setError(["Contact us hero image is updated successfully!"]);
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

  console.log("val res", !heroImage || (heroImage && isUpdateHeroImageEnabled));
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
      {heroImage && isHideImage && (
        <ContactUsHeroImageBox>
          <ContactUsHeroImageDisableBtn
            onClick={handleResetToPreviousStepClick}
          >
            Go Back
          </ContactUsHeroImageDisableBtn>
        </ContactUsHeroImageBox>
      )}
      {heroImage && !isUpdateHeroImageEnabled && !isHideImage && (
        <>
          <ContactUsHeroImage src={heroImage} alt="Contact us hero image" />
          <ContactUsHeroImageText>
            Do you want to change contact us hero image?
          </ContactUsHeroImageText>
          <ContactUsHeroImageBox>
            <ContactUsHeroImageEnableBtn
              onClick={handleEnableHeroImageUpdateClick}
            >
              Yes
            </ContactUsHeroImageEnableBtn>
            <ContactUsHeroImageDisableBtn
              onClick={handleDisableHeroImageUpdateClick}
            >
              No
            </ContactUsHeroImageDisableBtn>
          </ContactUsHeroImageBox>
        </>
      )}

      {(!heroImage || (heroImage && isUpdateHeroImageEnabled)) && (
        <>
          {heroImage && (
            <ContactUsHeroImage src={heroImage} alt="Contact us hero image" />
          )}

          <Formik
            initialValues={{
              heroImage: "",
            }}
            onSubmit={(heroImageData) => {
              const galleryHeroImageInput = document.getElementById(
                "contactUsHeroImage"
              ) as HTMLInputElement;
              handleUpdateHeroImageSubmit(galleryHeroImageInput.files);
            }}
            validationSchema={heroImageSchema}
          >
            {({ handleSubmit, handleChange, errors, touched, values }) => (
              <Form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor="contactUsHeroImage">
                    Choose Image
                  </FormLabel>
                  <FormInput
                    type="file"
                    id="contactUsHeroImage"
                    name="heroImage"
                    onChange={handleChange}
                    value={values.heroImage}
                  />
                  {errors.heroImage && touched.heroImage ? (
                    <FormFieldError>{errors.heroImage}</FormFieldError>
                  ) : null}
                </FormControl>

                <FormButton
                  type="submit"
                  isLoading={isLoading ? true : false}
                  disabled={isLoading ? true : false}
                >
                  {isLoading ? "Updating Hero Image..." : "Update Hero Image"}
                </FormButton>
              </Form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

export default HeroImageForm;
