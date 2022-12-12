import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addSlider } from "../../../../../redux/home-page";
import { createSlider } from "../../../../../api/home-page";
import { ISlider } from "../../../../../types/home-page";
import sliderSchema from "../../../../../schemas/sliderSchema";
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

const CreateSliderForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string[]>([]);

  const handleUpdateAdminProfileSubmit = async (
    sliderData: ISlider,
    imageFile: any
  ) => {
    try {
      const imageTypes = ["webp", "jpeg", "jpg", "png", "svg"];

      console.log(imageFile);
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
        formData.append("image", imageFile[0]);
        formData.append("title", sliderData.title);
        formData.append("description", sliderData.description);

        setIsLoading(true);
        const sliderResponse = await createSlider(formData);

        const slider = {
          _id: sliderResponse.data._id,
          title: sliderResponse.data.title,
          description: sliderResponse.data.description,
          image: sliderResponse.data.image,
        };
        dispatch(addSlider({ slider }));
        navigate("/cms-manage-sliders");
      }
    } catch (err: any) {
      console.error(err.response.data);
      setError(["Something went wrong! Please try again later!"]);
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
          title: "",
          description: "",
          image: "",
        }}
        onSubmit={(sliderData) => {
          const input = document.getElementById(
            "slider-create-image"
          ) as HTMLInputElement;
          handleUpdateAdminProfileSubmit(sliderData, input.files);
        }}
        validationSchema={sliderSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="title">Slider Title</FormLabel>
              <FormInput
                type="text"
                id="title"
                placeholder="Enter Slider Title"
                name="title"
                onChange={handleChange}
                value={values.title}
              />
              {errors.title && touched.title ? (
                <FormFieldError>{errors.title}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Slider Description</FormLabel>
              <FormInput
                type="text"
                id="description"
                placeholder="Enter Slider Description"
                name="description"
                onChange={handleChange}
                value={values.description}
              />
              {errors.description && touched.description ? (
                <FormFieldError>{errors.description}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="slider-create-image">Slider Image</FormLabel>
              <FormInput
                type="file"
                id="slider-create-image"
                placeholder="Enter Slider Image"
                name="image"
                onChange={handleChange}
                value={values.image}
              />
              {errors.image && touched.image ? (
                <FormFieldError>{errors.image}</FormFieldError>
              ) : null}
            </FormControl>

            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Creating Slider..." : "Create Slider"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateSliderForm;
