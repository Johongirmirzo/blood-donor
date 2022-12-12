import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addSponsor } from "../../../../../redux/faq-page";
import { createSponsor } from "../../../../../api/faq-page";
import heroImageSchema from "../../../../../schemas/heroImageSchema";
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

const CreateSponsorForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
        formData.append("sponsor-logo", imageFile[0]);
        setIsLoading(true);
        const sponsorResponse = await createSponsor(formData);
        console.log("response", sponsorResponse.data);
        setIsLoading(false);
        dispatch(
          addSponsor({
            newSponsor: { ...sponsorResponse.data },
          })
        );
        navigate("/cms-manage-sponsors");
      }
    } catch (err: any) {
      console.error(err.response);
      setError(["Please fill all input fields"]);
      setIsLoading(false);
    }
  };
  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  return (
    <>
      {error &&
        error.map((err, index) => (
          <Alert>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}
      <Formik
        initialValues={{
          heroImage: "",
        }}
        onSubmit={(heroImageData) => {
          const galleryHeroImageInput = document.getElementById(
            "faqSponsorImage"
          ) as HTMLInputElement;
          handleUpdateHeroImageSubmit(galleryHeroImageInput.files);
        }}
        validationSchema={heroImageSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="faqSponsorImage">Choose Image</FormLabel>
              <FormInput
                type="file"
                id="faqSponsorImage"
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
              {isLoading ? "Creating Sponsor Image..." : "Create Sponsor Image"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateSponsorForm;
