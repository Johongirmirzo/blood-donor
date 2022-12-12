import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, FieldArray } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateVolunteer } from "../../../../../redux/about-page";
import { editVolunteer } from "../../../../../api/about-page";
import {
  IVolunteerData,
  IVolunteerList,
} from "../../../../../types/about-us-page";
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
  EditVolunteerFormInputBox,
  EditVolunteerFormDeleteBtn,
  EditVolunteerFormAddBtn,
} from "./index.styled";

const EditVolunteerForm = () => {
  const dispatch = useDispatch();
  const volunteers = useSelector(
    (state: RootState) => state.aboutUsPage.volunteers.volunteers
  );
  const navigate = useNavigate();
  const { volunteerId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [volunteer, setVolunteer] = useState({} as IVolunteerList);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    if (volunteerId) {
      setVolunteer(
        volunteers.filter((volunteer) => volunteer._id === volunteerId)[0]
      );
    }
  }, [volunteerId, volunteers]);

  const handleCreateVolunteerSubmit = async (
    volunteerData: IVolunteerData,
    imageFile: any
  ) => {
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
        formData.append("volunteer-image", imageFile[0]);
        formData.append("volunteerName", volunteerData.volunteerName);
        formData.append("volunteerTitle", volunteerData.volunteerTitle);
        formData.append(
          "volunteerSocialMedia",
          JSON.stringify(volunteerData.volunteerSocialMedia)
        );
        if (volunteerId) {
          setIsLoading(true);
          const volunteerResponse = await editVolunteer(formData, volunteerId);
          console.log(volunteerResponse);

          dispatch(
            updateVolunteer({ editedVolunteer: { ...volunteerResponse.data } })
          );
          navigate("/cms-volunteers");
          setIsLoading(false);
          setIsUpdateSuccessfull(true);
        }
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
      {volunteer?.volunteerName && (
        <Formik
          initialValues={{
            volunteerName: volunteer.volunteerName,
            volunteerTitle: volunteer.volunteerTitle,
            volunteerImage: "",
            volunteerSocialMedia: volunteer.volunteerSocialMedia.length
              ? volunteer.volunteerSocialMedia
              : [{ socialMediaName: "", socialMediaUrl: "" }],
          }}
          onSubmit={(volunteerData) => {
            console.log(volunteerData);
            if (volunteerData.volunteerSocialMedia.length > 10) {
              setError(["Maximum amount of allowed social media is 10"]);
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
                          <EditVolunteerFormInputBox>
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

                            <EditVolunteerFormDeleteBtn
                              type="button"
                              onClick={() => remove(index)}
                            >
                              <RiDeleteBinLine />
                            </EditVolunteerFormDeleteBtn>
                          </EditVolunteerFormInputBox>
                        </React.Fragment>
                      ))}
                      <EditVolunteerFormAddBtn
                        type="button"
                        onClick={() =>
                          push({ socialMediaName: "", socialMediaUrl: "" })
                        }
                      >
                        + Add New Social Media
                      </EditVolunteerFormAddBtn>
                    </div>
                  )}
                </FieldArray>
              </FormControl>
              <FormButton
                type="submit"
                isLoading={isLoading ? true : false}
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Editing Volunteer..." : "Edit Volunteer"}
              </FormButton>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default EditVolunteerForm;
