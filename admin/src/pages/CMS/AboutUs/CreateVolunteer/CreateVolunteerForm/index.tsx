import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Formik, FieldArray } from "formik";
import { useDispatch } from "react-redux";
import { addVolunteer } from "../../../../../redux/about-page";
import { createVolunteer } from "../../../../../api/about-page";
import { IVolunteerData } from "../../../../../types/about-us-page";
import volunteerSchema from "../../../../../schemas/volunteerSchema";
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
  CreateVolunteerFormInputBox,
  CreateVolunteerFormDeleteBtn,
  CreateVolunteerFormAddBtn,
} from "./index.styled";

const CreateVolunteerForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleCreateVolunteerSubmit = async (
    volunteerData: IVolunteerData,
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
        formData.append("volunteer-image", imageFile[0]);
        formData.append("volunteerName", volunteerData.volunteerName);
        formData.append("volunteerTitle", volunteerData.volunteerTitle);
        formData.append(
          "volunteerSocialMedia",
          JSON.stringify(volunteerData.volunteerSocialMedia)
        );

        setIsLoading(true);
        const newVolunteerResponse = await createVolunteer(formData);
        console.log(newVolunteerResponse);

        dispatch(
          addVolunteer({ newVolunteer: { ...newVolunteerResponse.data } })
        );
        navigate("/cms-volunteers");
        setIsLoading(false);
        setIsUpdateSuccessfull(true);
      }
    } catch (err: any) {
      setError(["Please provide valid data! Or Refill the form"]);
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
      <Formik
        initialValues={{
          volunteerName: "",
          volunteerTitle: "",
          volunteerImage: "",
          volunteerSocialMedia: [{ socialMediaName: "", socialMediaUrl: "" }],
        }}
        onSubmit={(volunteerData) => {
          console.log(volunteerData);
          if (volunteerData.volunteerSocialMedia.length > 5) {
            setError(["Maximum amount of allowed social media is 5"]);
            setIsUpdateSuccessfull(false);
          } else {
            const volunteerImageInput = document.getElementById(
              "volunteerImage"
            ) as HTMLInputElement;

            handleCreateVolunteerSubmit(
              volunteerData,
              volunteerImageInput.files
            );
          }
        }}
        validationSchema={volunteerSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="volunteerName">Volunteer Name</FormLabel>
              <FormInput
                type="text"
                id="volunteerName"
                placeholder="Enter Volunteer Name"
                name="volunteerName"
                onChange={handleChange}
                value={values.volunteerName}
              />
              {errors.volunteerName && touched.volunteerName ? (
                <FormFieldError>{errors.volunteerName}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="volunteerTitle">Volunteer Title</FormLabel>
              <FormInput
                type="text"
                id="volunteerTitle"
                placeholder="Enter Volunteer Title"
                name="volunteerTitle"
                onChange={handleChange}
                value={values.volunteerTitle}
              />
              {errors.volunteerTitle && touched.volunteerTitle ? (
                <FormFieldError>{errors.volunteerTitle}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="volunteerImage">Choose Image</FormLabel>
              <FormInput
                type="file"
                id="volunteerImage"
                name="volunteerImage"
                onChange={handleChange}
                value={values.volunteerImage}
              />
              {errors.volunteerImage && touched.volunteerImage ? (
                <FormFieldError>{errors.volunteerImage}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FieldArray name="volunteerSocialMedia">
                {({ push, remove }) => (
                  <div>
                    <FormLabel>Social Media List</FormLabel>
                    {values.volunteerSocialMedia.map((socialMedia, index) => (
                      <React.Fragment key={index}>
                        <CreateVolunteerFormInputBox>
                          <FormInput
                            type="text"
                            placeholder="Enter Social Media Name"
                            name={`volunteerSocialMedia.${index}.socialMediaName`}
                            value={socialMedia.socialMediaName}
                            onChange={handleChange}
                          />
                          <FormInput
                            type="text"
                            placeholder="Enter Social Media Url"
                            name={`volunteerSocialMedia.${index}.socialMediaUrl`}
                            value={socialMedia.socialMediaUrl}
                            onChange={handleChange}
                          />

                          <CreateVolunteerFormDeleteBtn
                            type="button"
                            onClick={() => remove(index)}
                          >
                            <RiDeleteBinLine />
                          </CreateVolunteerFormDeleteBtn>
                        </CreateVolunteerFormInputBox>
                      </React.Fragment>
                    ))}
                    <CreateVolunteerFormAddBtn
                      type="button"
                      onClick={() =>
                        push({ socialMediaName: "", socialMediaUrl: "" })
                      }
                    >
                      + Add New Social Media
                    </CreateVolunteerFormAddBtn>
                  </div>
                )}
              </FieldArray>
            </FormControl>
            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Creating Volunteer..." : "Create Volunteer"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateVolunteerForm;
