import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Formik, FieldArray } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateBloodGroupsInfo } from "../../../../../redux/home-page";
import { updateBloodGroupInfo as editBloodGroupInfo } from "../../../../../api/home-page";
import helpfulInfoSchema from "../../../../../schemas/helpfulInfoSchema";
import { IBloodGroup } from "../../../../../types/home-page";
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
  BloodGroupInfoInputBox,
  BloodGroupInfoDeleteBtn,
  BloodGroupInfoAddBtn,
} from "./index.styled";

const BloodGroupInfoForm = () => {
  const dispatch = useDispatch();
  const bloodGroups = useSelector(
    (state: RootState) => state.homePage.bloodGroups
  );

  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleUpdateBloodGroupInfoSubmit = async (
    bloodGroupInfoData: IBloodGroup,
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
        formData.append("title", bloodGroupInfoData.title);
        formData.append("description", bloodGroupInfoData.description);
        formData.append(
          "bloodGroupList",
          JSON.stringify(bloodGroupInfoData.bloodGroupList)
        );
        formData.append(
          "bloodGroupListDescription",
          bloodGroupInfoData.bloodGroupListDescription
        );

        setIsLoading(true);
        const bloodGroupInfoResponse = await editBloodGroupInfo(formData);
        console.log("response", bloodGroupInfoResponse.data);
        setIsLoading(false);
        dispatch(
          updateBloodGroupsInfo({ bloodGroupInfo: bloodGroupInfoResponse.data })
        );
        setError(["Blood group info is updated successfully!"]);
        setIsUpdateSuccessfull(true);
      }
    } catch (err: any) {
      console.error(err.response);
      setError([
        "Please fill all input fields! Provide at least 10 character long blood group info list",
      ]);
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
      {true && (
        <Formik
          initialValues={{
            title: bloodGroups.title,
            description: bloodGroups.description,
            bloodGroupListDescription: bloodGroups.bloodGroupListDescription,
            bloodGroupImage: "",
            bloodGroupList: bloodGroups.bloodGroupList.length
              ? bloodGroups.bloodGroupList
              : [""],
          }}
          onSubmit={(bloodGroupInfoData) => {
            console.log(bloodGroupInfoData);
            if (bloodGroupInfoData.bloodGroupList.length < 4) {
              setError(["Please provide at least 5 info lists"]);
              setIsUpdateSuccessfull(false);
            } else if (bloodGroupInfoData.bloodGroupList.length > 25) {
              setError(["Maximum allowed info list amount is 25"]);
              setIsUpdateSuccessfull(false);
            } else {
              const bloodGroupImageInput = document.getElementById(
                "bloodGroupImage"
              ) as HTMLInputElement;

              handleUpdateBloodGroupInfoSubmit(
                bloodGroupInfoData,
                bloodGroupImageInput.files
              );
            }
          }}
          validationSchema={helpfulInfoSchema}
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
                <FormLabel htmlFor="bloodGroupListDescription">
                  Blood Group Description
                </FormLabel>
                <FormInput
                  type="text"
                  id="bloodGroupListDescription"
                  placeholder="Enter Title"
                  name="bloodGroupListDescription"
                  onChange={handleChange}
                  value={values.bloodGroupListDescription}
                />
                {errors.bloodGroupListDescription &&
                touched.bloodGroupListDescription ? (
                  <FormFieldError>
                    {errors.bloodGroupListDescription}
                  </FormFieldError>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="bloodGroupImage">Choose Image</FormLabel>
                <FormInput
                  type="file"
                  id="bloodGroupImage"
                  placeholder="Enter Title"
                  name="bloodGroupImage"
                  onChange={handleChange}
                  value={values.bloodGroupImage}
                />
                {errors.bloodGroupImage && touched.bloodGroupImage ? (
                  <FormFieldError>{errors.bloodGroupImage}</FormFieldError>
                ) : null}
              </FormControl>
              <FormControl>
                <FieldArray name="bloodGroupList">
                  {({ insert, push, remove }) => (
                    <div>
                      <FormLabel>Info List</FormLabel>
                      {values.bloodGroupList.map((bloodGroupList, index) => (
                        <React.Fragment key={index}>
                          <BloodGroupInfoInputBox key={index}>
                            <FormInput
                              type="text"
                              placeholder="Enter BloodGroup info"
                              name={`bloodGroupList.${index}`}
                              value={bloodGroupList}
                              onChange={handleChange}
                            />
                            <BloodGroupInfoDeleteBtn
                              type="button"
                              onClick={() => remove(index)}
                            >
                              <RiDeleteBinLine />
                            </BloodGroupInfoDeleteBtn>
                          </BloodGroupInfoInputBox>
                        </React.Fragment>
                      ))}
                      <BloodGroupInfoAddBtn
                        type="button"
                        onClick={() => push("")}
                      >
                        + Add New Info
                      </BloodGroupInfoAddBtn>
                    </div>
                  )}
                </FieldArray>
              </FormControl>
              <FormButton
                type="submit"
                isLoading={isLoading ? true : false}
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Updating Helpful Info..." : "Update Helpful Info"}
              </FormButton>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default BloodGroupInfoForm;
