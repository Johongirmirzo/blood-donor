import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateHeroImage } from "../../../../../redux/gallery-page";
import { updateHeroImage as editHeroImage } from "../../../../../api/gallery-page";
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
  GalleryHeroImage,
  GalleryHeroImageText,
  GalleryHeroImageBox,
  GalleryHeroImageEnableBtn,
  GalleryHeroImageDisableBtn,
} from "./index.styled";

const HeroImageForm = () => {
  const dispatch = useDispatch();
  const heroImage = useSelector(
    (state: RootState) => state.galleryPage.heroImage
  );
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const {
    isUpdateHeroImageEnabled,
    isHideImage,
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
        formData.append("gallery-hero-image", imageFile[0]);
        setIsLoading(true);
        const heroImageResponse = await editHeroImage(formData);
        console.log("response", heroImageResponse.data);
        setIsLoading(false);
        dispatch(
          updateHeroImage({
            heroImage: heroImageResponse.data,
          })
        );
        setError(["Gallery hero image is updated successfully!"]);
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
        <GalleryHeroImageBox>
          <GalleryHeroImageDisableBtn onClick={handleResetToPreviousStepClick}>
            Go Back
          </GalleryHeroImageDisableBtn>
        </GalleryHeroImageBox>
      )}
      {heroImage && !isUpdateHeroImageEnabled && !isHideImage && (
        <>
          <GalleryHeroImage src={heroImage} alt="Contact us hero image" />
          <GalleryHeroImageText>
            Do you want to change gallery hero image?
          </GalleryHeroImageText>
          <GalleryHeroImageBox>
            <GalleryHeroImageEnableBtn
              onClick={handleEnableHeroImageUpdateClick}
            >
              Yes
            </GalleryHeroImageEnableBtn>
            <GalleryHeroImageDisableBtn
              onClick={handleDisableHeroImageUpdateClick}
            >
              No
            </GalleryHeroImageDisableBtn>
          </GalleryHeroImageBox>
        </>
      )}

      {(!heroImage || (heroImage && isUpdateHeroImageEnabled)) && (
        <>
          {heroImage && (
            <GalleryHeroImage src={heroImage} alt="Contact us hero image" />
          )}

          <Formik
            initialValues={{
              heroImage: "",
            }}
            onSubmit={(heroImageData) => {
              const galleryHeroImageInput = document.getElementById(
                "galleryHeroImage"
              ) as HTMLInputElement;
              handleUpdateHeroImageSubmit(galleryHeroImageInput.files);
            }}
            validationSchema={heroImageSchema}
          >
            {({ handleSubmit, handleChange, errors, touched, values }) => (
              <Form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor="galleryHeroImage">Choose Image</FormLabel>
                  <FormInput
                    type="file"
                    id="galleryHeroImage"
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
