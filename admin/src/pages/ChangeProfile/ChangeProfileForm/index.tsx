import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { changeProfile as changeAdminProfile } from "../../../redux/admin";
import adminProfileSchema from "../../../schemas/adminProfileSchema";
import { changeProfile } from "../../../api/admin";
import { IProfileData } from "../../../types/form";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";
import { ChangeProfileLabel, ChangeProfileRadio } from "./index.styled";

const ChangeProfileForm = () => {
  const dispatch = useDispatch();
  const { adminId, fullname, phoneNumber, email, age, gender, city } =
    useSelector((state: RootState) => state.admin);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleUpdateAdminProfileSubmit = async (profileData: IProfileData) => {
    try {
      setIsLoading(true);
      const adminProfileResponse = await changeProfile(profileData, adminId);
      console.log(adminProfileResponse);
      const admin = {
        fullname: adminProfileResponse.data.fullname,
        phoneNumber: adminProfileResponse.data.phoneNumber,
        email: adminProfileResponse.data.email,
        age: adminProfileResponse.data.age,
        gender: adminProfileResponse.data.gender,
        city: adminProfileResponse.data.city,
      };
      dispatch(changeAdminProfile({ admin }));
      setError(["Your profile is changed successfully!"]);
      setIsLoading(false);
      setIsUpdateSuccessfull(true);
    } catch (err) {
      setError(["Something went wrong! Please try again later!"]);
      setIsLoading(false);
      setIsUpdateSuccessfull(false);
    }
  };

  const isDemoMode = (email: string) => email === "admin.demo@gmail.com";

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
          fullname,
          phoneNumber,
          email,
          age,
          gender,
          city,
        }}
        onSubmit={(profileData) => {
          handleUpdateAdminProfileSubmit(profileData);
        }}
        validationSchema={adminProfileSchema}
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
              <FormLabel htmlFor="age">Age</FormLabel>
              <FormInput
                type="age"
                id="age"
                placeholder="Enter Phone Number"
                name="age"
                onChange={handleChange}
                value={values.age}
              />
              {errors.age && touched.age ? (
                <FormFieldError>{errors.age}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="city">City</FormLabel>
              <FormInput
                type="city"
                id="city"
                placeholder="Enter Phone Number"
                name="city"
                onChange={handleChange}
                value={values.city}
              />
              {errors.city && touched.city ? (
                <FormFieldError>{errors.city}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel>Choose Gender</FormLabel>
              <div>
                <ChangeProfileLabel htmlFor="male">
                  <ChangeProfileRadio
                    type="radio"
                    id="male"
                    name="gender"
                    value="MALE"
                    onChange={handleChange}
                  />{" "}
                  Male
                </ChangeProfileLabel>
                <ChangeProfileLabel htmlFor="female">
                  <ChangeProfileRadio
                    type="radio"
                    id="female"
                    name="gender"
                    value="FEMALE"
                    onChange={handleChange}
                  />{" "}
                  Female
                </ChangeProfileLabel>
                {errors.gender && touched.gender ? (
                  <FormFieldError>{errors.gender}</FormFieldError>
                ) : null}
              </div>
            </FormControl>
            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Updating Profile..." : "Update Profile"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangeProfileForm;
