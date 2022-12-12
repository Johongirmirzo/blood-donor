import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { Formik, FieldArray, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateHelpfulInfo } from "../../../../../redux/home-page";
import { updateHelpfulInfo as editHelpfulInfo } from "../../../../../api/home-page";
import helpfulInfoSchema from "../../../../../schemas/helpfulInfoSchema";
import { IHelpfulInfo } from "../../../../../types/home-page";
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
  HelpfulInfoInputBox,
  HelpfulInfoDeleteBtn,
  HelpfulInfoAddBtn,
  HelpfulInfoErrorBox,
} from "./index.styled";

const HelpfulInfoForm = () => {
  const dispatch = useDispatch();
  const helpfulInfo = useSelector(
    (state: RootState) => state.homePage.helpfulInfo
  );

  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleUpdateHelpfulInfoSubmit = async (
    helpfulInfoData: IHelpfulInfo
  ) => {
    try {
      setIsLoading(true);
      const helpfulInfoResponse = await editHelpfulInfo(helpfulInfoData);
      console.log("response", helpfulInfoResponse.data);
      setIsLoading(false);
      dispatch(updateHelpfulInfo({ helpfulInfo: helpfulInfoResponse.data }));
      setError(["Heplpful info is updated successfully!"]);
      setIsUpdateSuccessfull(true);
    } catch (err: any) {
      console.error(err.response);
      setError([
        "Please fill all input fields! Provide at least 10 character long info list",
      ]);
      setIsLoading(false);
      setIsUpdateSuccessfull(false);
    }
  };
  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  // console.log(helpfulInfo);
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
          title: helpfulInfo.title,
          description: helpfulInfo.description,
          infoList: helpfulInfo.infoList.length ? helpfulInfo.infoList : [""],
        }}
        onSubmit={(helpfulInfoData) => {
          console.log(helpfulInfoData);
          if (helpfulInfoData.infoList.length < 5) {
            setError(["Please provide at least 5 info lists"]);
            setIsUpdateSuccessfull(false);
          } else if (helpfulInfoData.infoList.length > 25) {
            setError(["Maximum allowed info list amount is 25"]);
            setIsUpdateSuccessfull(false);
          } else {
            handleUpdateHelpfulInfoSubmit(helpfulInfoData);
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
              <FieldArray name="infoList">
                {({ insert, push, remove }) => (
                  <div>
                    <FormLabel>Info List</FormLabel>
                    {values.infoList.map((infoList, index) => (
                      <React.Fragment key={index}>
                        <HelpfulInfoInputBox key={index}>
                          <FormInput
                            type="text"
                            placeholder="Enter helpful info"
                            name={`infoList.${index}`}
                            value={infoList}
                            onChange={handleChange}
                          />
                          <HelpfulInfoDeleteBtn
                            type="button"
                            onClick={() => remove(index)}
                          >
                            <RiDeleteBinLine />
                          </HelpfulInfoDeleteBtn>
                        </HelpfulInfoInputBox>
                      </React.Fragment>
                    ))}
                    <HelpfulInfoAddBtn type="button" onClick={() => push("")}>
                      + Add New Info
                    </HelpfulInfoAddBtn>
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
    </>
  );
};

export default HelpfulInfoForm;
