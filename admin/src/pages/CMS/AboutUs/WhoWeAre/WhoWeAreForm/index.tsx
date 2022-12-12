import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Formik, FieldArray } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateAboutUs } from "../../../../../redux/about-page";
import { updateAboutUs as editAboutUs } from "../../../../../api/about-page";
import aboutUsSchema from "../../../../../schemas/aboutUsSchema";
import { IAboutUs } from "../../../../../types/about-us-page";
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
  WhoWeAreInputBox,
  WhoWeAreDeleteBtn,
  WhoWeAreAddBtn,
} from "./index.styled";

const AchievementsForm = () => {
  const dispatch = useDispatch();
  const aboutUs = useSelector((state: RootState) => state.aboutUsPage.aboutUs);

  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleUpdateOurAchievementsSubmit = async (
    aboutUsData: IAboutUs,
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
        formData.append("about-us-image", imageFile[0]);
        formData.append("title", aboutUsData.title);
        formData.append("description", aboutUsData.description);
        formData.append("aboutUsList", JSON.stringify(aboutUsData.aboutUsList));

        setIsLoading(true);
        const aboutUsResponse = await editAboutUs(formData);
        console.log("response", aboutUsResponse.data);
        setIsLoading(false);
        dispatch(
          updateAboutUs({
            aboutUs: { ...aboutUsResponse.data },
          })
        );
        setError(["About us is updated successfully!"]);
        setIsUpdateSuccessfull(true);
      }
    } catch (err: any) {
      console.error(err.response);
      setError(["Please provide valid data!"]);
      setIsLoading(false);
      setIsUpdateSuccessfull(false);
    }
  };
  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  console.log(1, aboutUs);
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
      {true && (
        <Formik
          initialValues={{
            title: aboutUs.title,
            description: aboutUs.description,
            aboutUsImage: "",
            aboutUsList: aboutUs.aboutUsList.length
              ? aboutUs.aboutUsList
              : [""],
          }}
          onSubmit={(aboutUsData) => {
            console.log(aboutUsData);
            if (aboutUsData.aboutUsList.length < 4) {
              setError(["Please provide at least 5 info lists"]);
              setIsUpdateSuccessfull(false);
            } else if (aboutUsData.aboutUsList.length > 25) {
              setError(["Maximum allowed info list amount is 25"]);
              setIsUpdateSuccessfull(false);
            } else {
              const aboutUsImageInput = document.getElementById(
                "aboutUsImage"
              ) as HTMLInputElement;
              handleUpdateOurAchievementsSubmit(
                aboutUsData,
                aboutUsImageInput.files
              );
            }
          }}
          validationSchema={aboutUsSchema}
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
                  placeholder="Enter Title"
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                />
                {errors.description && touched.description ? (
                  <FormFieldError>{errors.description}</FormFieldError>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="aboutUsImage">Choose Image</FormLabel>
                <FormInput
                  type="file"
                  id="aboutUsImage"
                  name="aboutUsImage"
                  onChange={handleChange}
                  value={values.aboutUsImage}
                />
                {errors.aboutUsImage && touched.aboutUsImage ? (
                  <FormFieldError>{errors.aboutUsImage}</FormFieldError>
                ) : null}
              </FormControl>

              <FormControl>
                <FieldArray name="aboutUsList">
                  {({ insert, push, remove }) => (
                    <div>
                      <FormLabel>About Us List</FormLabel>
                      {values.aboutUsList.map((aboutUsItem, index) => (
                        <React.Fragment key={index}>
                          <WhoWeAreInputBox key={index}>
                            <FormInput
                              type="text"
                              placeholder="Enter About Us Info"
                              name={`aboutUsList.${index}`}
                              value={aboutUsItem}
                              onChange={handleChange}
                            />

                            <WhoWeAreDeleteBtn
                              type="button"
                              onClick={() => remove(index)}
                            >
                              <RiDeleteBinLine />
                            </WhoWeAreDeleteBtn>
                          </WhoWeAreInputBox>
                        </React.Fragment>
                      ))}
                      <WhoWeAreAddBtn type="button" onClick={() => push("")}>
                        + Add New About Us Info
                      </WhoWeAreAddBtn>
                    </div>
                  )}
                </FieldArray>
              </FormControl>
              <FormButton
                type="submit"
                isLoading={isLoading ? true : false}
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Updating About Us..." : "Update About Us"}
              </FormButton>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default AchievementsForm;
