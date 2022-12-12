import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateHeroImage } from "../../../../../redux/about-page";
import { updateHeroImage as editHeroImage } from "../../../../../api/about-page";
import { useUpdateImage } from "../../../../../hooks/useUpdateImage";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
} from "../../../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../../../styles/UI/Alert/index.styled";
import {
  AboutUsHeroImage,
  AboutUsHeroImageText,
  AboutUsHeroImageBox,
  AboutUsHeroImageEnableBtn,
  AboutUsHeroImageDisableBtn,
} from "./index.styled";

const HeroImageForm = () => {
  const dispatch = useDispatch();
  const heroImage = useSelector(
    (state: RootState) => state.aboutUsPage.heroImage
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
  const handleUpdateAboutHeroImageSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const heroImageInput: any = document.getElementById("aboutHeroImage");

    try {
      console.log(heroImageInput.files[0]);
      const imageTypes = ["webp", "jpeg", "jpg", "png", "svg"];

      if (!imageTypes.includes(heroImageInput.files[0].type.split("/")[1])) {
        if (heroImageInput.files[0].size > 1000000) {
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
        formData.append("about-hero-image", heroImageInput.files[0]);
        setIsLoading(true);
        const heroImageResponse = await editHeroImage(formData);
        setIsLoading(false);
        dispatch(updateHeroImage({ heroImage: heroImageResponse.data }));
        setError(["Hero image is updated successfully!"]);
        setIsUpdateSuccessfull(true);
      }
    } catch (err: any) {
      console.error(err.response);
      setError(["Please choose the image!"]);
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
      {isHideImage && (
        <AboutUsHeroImageBox>
          <AboutUsHeroImageDisableBtn onClick={handleResetToPreviousStepClick}>
            Go Back
          </AboutUsHeroImageDisableBtn>
        </AboutUsHeroImageBox>
      )}
      {heroImage && !isUpdateHeroImageEnabled && !isHideImage && (
        <>
          <AboutUsHeroImage src={heroImage} alt="About us hero image" />

          <AboutUsHeroImageText>
            Do you want to change about us hero image?
          </AboutUsHeroImageText>
          <AboutUsHeroImageBox>
            <AboutUsHeroImageEnableBtn
              onClick={handleEnableHeroImageUpdateClick}
            >
              Yes
            </AboutUsHeroImageEnableBtn>
            <AboutUsHeroImageDisableBtn
              onClick={handleDisableHeroImageUpdateClick}
            >
              No
            </AboutUsHeroImageDisableBtn>
          </AboutUsHeroImageBox>
        </>
      )}
      {(!heroImage || (heroImage && isUpdateHeroImageEnabled)) && (
        <>
          {heroImage && (
            <AboutUsHeroImage src={heroImage} alt="About us hero image" />
          )}
          <Form onSubmit={handleUpdateAboutHeroImageSubmit}>
            <FormControl>
              <FormLabel htmlFor="aboutHeroImage">Choose Image</FormLabel>
              <FormInput
                type="file"
                name="aboutHeroImage"
                id="aboutHeroImage"
              />
            </FormControl>
            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Updating Hero Image..." : "Update Hero Image"}
            </FormButton>
          </Form>
        </>
      )}
    </>
  );
};

export default HeroImageForm;
