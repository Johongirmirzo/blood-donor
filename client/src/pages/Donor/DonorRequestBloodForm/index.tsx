import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import { createBloodRequirer as addBloodRequirer } from "../../../redux/blood-requirer";
import bloodRequirerSchema from "../../../schemas/bloodRequirerSchema";
import { createBloodRequirer } from "../../../api/blood-requirer";
import { IBloodRequirerData } from "../../../types/blood-requirer";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextArea,
  FormFieldError,
} from "../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";
import { DonorRequestBloodFormBtn } from "./index.styled";

const DonorRequestBloodForm = () => {
  const dispatch = useDispatch();
  const { donorId } = useParams();

  const { _id: currentAuthDonorId } = useSelector(
    (state: RootState) => state.authUser
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleAddBloodRequirerSubmit = async (
    bloodRequirerData: IBloodRequirerData
  ) => {
    console.log(bloodRequirerData);
    try {
      setIsLoading(true);
      const bloodRequestResponse = await createBloodRequirer(bloodRequirerData);
      console.log(bloodRequestResponse);
      dispatch(
        addBloodRequirer({ newBloodRequirer: { ...bloodRequestResponse.data } })
      );
      setError([
        "Your request is sent successfully! Donor'd contact you ASAP!",
      ]);
      setIsLoading(false);
      setIsUpdateSuccessfull(true);
    } catch (err: any) {
      if (err.response?.data?.error) {
        setError([err.response.data.error]);
      }
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
          fullname: "",
          phoneNumber: "",
          email: "",
          bloodNeededFor: "",
          message: "",
        }}
        onSubmit={(bloodRequirerData) => {
          if (donorId) {
            if (donorId === currentAuthDonorId) {
              setError(["You can't make blood request to yourself!"]);
              setIsUpdateSuccessfull(false);
            } else {
              handleAddBloodRequirerSubmit({ ...bloodRequirerData, donorId });
            }
          }
        }}
        validationSchema={bloodRequirerSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="fullname">Full Name</FormLabel>
              <FormInput
                type="text"
                id="fullname"
                placeholder="Enter Full Name"
                name="fullname"
                onChange={handleChange}
                value={values.fullname}
              />
              {errors.fullname && touched.fullname ? (
                <FormFieldError>{errors.fullname}</FormFieldError>
              ) : null}
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
              <FormInput
                type="text"
                id="phoneNumber"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                value={values.phoneNumber}
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <FormFieldError>{errors.phoneNumber}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                placeholder="Enter Phone Number"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <FormFieldError>{errors.email}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="bloodNeededFor">Blood Needed For</FormLabel>
              <FormSelect
                id="bloodNeededFor"
                name="bloodNeededFor"
                onChange={handleChange}
                value={values.bloodNeededFor}
              >
                <option value="">Choose whom blood needed</option>
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
                <option value="Sister">Siter</option>
                <option value="Brother">Brother</option>
                <option value="Child">Child</option>
                <option value="Grandfather">Grandfather</option>
                <option value="Grandmother">Grandmother</option>
                <option value="Grandchild">Grandchild</option>
                <option value="Other">Other</option>
              </FormSelect>
              {errors.bloodNeededFor && touched.bloodNeededFor ? (
                <FormFieldError>{errors.bloodNeededFor}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextArea
                name="message"
                id="message"
                placeholder="Enter Message"
                onChange={handleChange}
                value={values.message}
              />
              {errors.message && touched.message ? (
                <FormFieldError>{errors.message}</FormFieldError>
              ) : null}
            </FormControl>
            <DonorRequestBloodFormBtn
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Requesting Blood..." : "Request Blood"}
            </DonorRequestBloodFormBtn>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DonorRequestBloodForm;
