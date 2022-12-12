import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateInitiative } from "../../../../../redux/home-page";
import { updateInitiative as editInitiative } from "../../../../../api/home-page";
import iniativeSchema from "../../../../../schemas/initiativeSchema";
import { IInitiative } from "../../../../../types/home-page";
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

const InitiativeForm = () => {
  const dispatch = useDispatch();
  const initiative = useSelector(
    (state: RootState) => state.homePage.initiative
  );

  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleUpdateInitiativeSubmit = async (initaitiveData: IInitiative) => {
    try {
      setIsLoading(true);
      const initiativeResponse = await editInitiative(initaitiveData);
      setIsLoading(false);
      dispatch(updateInitiative({ initiative: initiativeResponse.data }));
      setError(["Initiative is updated successfully!"]);
      setIsUpdateSuccessfull(true);
    } catch (err: any) {
      setError(["Please fill all input fields!"]);
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
          title: initiative.title,
          description: initiative.description,
        }}
        onSubmit={(initiativeData) => {
          console.log(initiativeData);
          handleUpdateInitiativeSubmit(initiativeData);
        }}
        validationSchema={iniativeSchema}
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
                placeholder="Enter Description"
                name="description"
                onChange={handleChange}
                value={values.description}
              />
              {errors.description && touched.description ? (
                <FormFieldError>{errors.description}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Updating Initiative..." : "Update Initiative"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InitiativeForm;
