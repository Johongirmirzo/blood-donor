import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import { addBloodGroup } from "../../../redux/blood-group";
import bloodGroupSchema from "../../../schemas/bloodGroupSchema";
import { createBloodGroup } from "../../../api/blood-group";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../styles/UI/Form/index.styled";

const CreateBloodGroup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleUpdateAdminProfileSubmit = async (bloodGroup: {
    bloodType: string;
  }) => {
    try {
      setIsLoading(true);
      const bloodGroupResponse = await createBloodGroup(bloodGroup);
      dispatch(addBloodGroup({ bloodGroup: bloodGroupResponse.data }));
      setError([""]);
      setIsLoading(false);
      navigate("/manage-blood-groups");
    } catch (err: any) {
      setError([err.response.data.error]);
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
          bloodType: "",
        }}
        onSubmit={(bloodTypeData) => {
          console.log(bloodTypeData);
          handleUpdateAdminProfileSubmit(bloodTypeData);
        }}
        validationSchema={bloodGroupSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="bloodType">Blood Type</FormLabel>
              <FormInput
                type="text"
                id="bloodType"
                placeholder="Enter Blood Type"
                name="bloodType"
                onChange={handleChange}
                value={values.bloodType}
              />
              {errors.bloodType && touched.bloodType ? (
                <FormFieldError>{errors.bloodType}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Creating Blood Type..." : "Create Blood Type"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateBloodGroup;
