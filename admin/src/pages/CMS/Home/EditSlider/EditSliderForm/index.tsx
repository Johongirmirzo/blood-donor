import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateSlider } from "../../../../../redux/home-page";
import { editSlider } from "../../../../../api/home-page";
import type { RootState } from "../../../../../redux/store";
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
  const { sliderId } = useParams();
  const sliders = useSelector((state: RootState) => state.homePage.sliders);
  const [isLoading, setIsLoading] = useState(false);
  const [slider, setSlider] = useState({} as ISlider);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    if (sliderId) {
      setSlider(sliders.filter((slider) => slider._id === sliderId)[0]);
    }
  }, [sliderId, sliders]);

  const handleUpdateAdminProfileSubmit = async (
    sliderData: ISlider,
    imageFile: any
  ) => {
    if (!imageFile[0]) return setError(["Please choose an image!"]);

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
        formData.append("image", imageFile[0]);
        formData.append("title", sliderData.title);
        formData.append("description", sliderData.description);
        console.log(sliderData, imageFile[0]);
        if (sliderId) {
          setIsLoading(true);
          const sliderResponse = await editSlider(formData, sliderId);
          setIsLoading(false);

          const editedSlider = {
            _id: sliderResponse.data._id,
            title: sliderResponse.data.title,
            description: sliderResponse.data.description,
            image: sliderResponse.data.image,
          };
          dispatch(updateSlider({ editedSlider }));
          navigate("/cms-manage-sliders");
        }
      }
    } catch (err: any) {
      console.error(err.response);
      setError(["Something went wrong! Please try again later!"]);
      setIsLoading(false);
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  console.log(slider);

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
      {slider?.title && (
        <Formik
          initialValues={{
            title: slider.title || "",
            description: slider.description || "",
            image: slider.image || "",
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
                <FormLabel htmlFor="slider-create-image">
                  Slider Image
                </FormLabel>
                <FormInput
                  type="file"
                  id="slider-create-image"
                  placeholder="Enter Slider Image"
                  name="image"
                  accept=".jpg, .jpeg, .png, .webp"
                  onChange={handleChange}
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
                {isLoading ? "Editing Slider..." : "Edit Slider"}
              </FormButton>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default CreateSliderForm;
