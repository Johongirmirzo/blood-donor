import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { changeProfile as changeDonorProfile } from "../../../redux/auth";
import donorProfileSchema from "../../../schemas/donorProfileSchema";
import { changeProfile } from "../../../api/donor";
import { IDonorProfile } from "../../../types/donor";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormSelect,
  FormFieldError,
} from "../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";
import {
  ChangeProfileLabel,
  ChangeProfileRadio,
  ChangeProfileBtn,
} from "./index.styled";

const ChangeProfileForm = () => {
  const dispatch = useDispatch();
  const {
    _id: donorId,
    fullname,
    phoneNumber,
    email,
    age,
    gender,
    city,
    bloodGroup,
  } = useSelector((state: RootState) => state.authUser);
  const bloodGroups = useSelector(
    (state: RootState) => state.bloodGroup.bloodGroups
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleUpdateDonorProfileSubmit = async (profileData: IDonorProfile) => {
    try {
      setIsLoading(true);
      const donorProfileResponse = await changeProfile(profileData, donorId);
      console.log(donorProfileResponse);
      const editedProfileData = {
        fullname: donorProfileResponse.data.fullname,
        phoneNumber: donorProfileResponse.data.phoneNumber,
        email: donorProfileResponse.data.email,
        age: donorProfileResponse.data.age,
        gender: donorProfileResponse.data.gender,
        city: donorProfileResponse.data.city,
        bloodGroup: donorProfileResponse.data.bloodGroup,
      };
      console.log(editedProfileData);
      dispatch(changeDonorProfile({ editedProfileData }));
      setError(["Your profile is changed successfully!"]);
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
          fullname,
          phoneNumber,
          email,
          age,
          gender,
          bloodGroup,
          city,
        }}
        onSubmit={handleUpdateDonorProfileSubmit}
        validationSchema={donorProfileSchema}
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
                type="number"
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
              <FormLabel htmlFor="bloodGroup">Blood Group</FormLabel>
              <FormSelect
                id="bloodGroup"
                name="bloodGroup"
                onChange={handleChange}
                value={values.bloodGroup}
              >
                <option value="">Choose blood group</option>
                {bloodGroups.map((bloodGroup) => (
                  <option key={bloodGroup._id}>{bloodGroup.bloodType}</option>
                ))}
              </FormSelect>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="city">City</FormLabel>
              <FormSelect
                id="city"
                name="city"
                onChange={handleChange}
                value={values.city}
              >
                <option value="">Choose city</option>
                <option value="Namangan">Namangan</option>
                <option value="Andijan">Andijan</option>
                <option value="Fergana">Fergana</option>
                <option value="Tashkent">Tashkent</option>
                <option value="Samarkand">Samarkand</option>
                <option value="Buhara">Buhara</option>
                <option value="Xorazm">Xorazm</option>
                <option value="Navoi">Navoi</option>
                <option value="Nukus">Nukus</option>
                <option value="Termez">Termez</option>
                <option value="Qarshi">Qarshi</option>
                <option value="Jizzakh">Jizzakh</option>
              </FormSelect>
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
                    checked={
                      values.gender.toLowerCase() === "male" ? true : false
                    }
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
                    checked={
                      values.gender.toLowerCase() === "female" ? true : false
                    }
                    onChange={handleChange}
                  />{" "}
                  Female
                </ChangeProfileLabel>
                {errors.gender && touched.gender ? (
                  <FormFieldError>{errors.gender}</FormFieldError>
                ) : null}
              </div>
            </FormControl>
            <ChangeProfileBtn
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Updating Profile..." : "Update Profile"}
            </ChangeProfileBtn>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangeProfileForm;
