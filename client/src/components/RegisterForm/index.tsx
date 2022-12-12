import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import donorRegisterSchema from "../../schemas/donorRegisterSchema";
import { register } from "../../api/donor";
import { createDonor } from "../../redux/donor";
import { IDonorRegisterData } from "../../types/donor";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormSelect,
  FormFieldError,
} from "../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../styles/UI/Alert/index.styled";
import { RegisterFormLabel, RegisterFormButton } from "./index.styled";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bloodGroups = useSelector(
    (state: RootState) => state.bloodGroup.bloodGroups
  );
  const donors = useSelector((state: RootState) => state.donors.donors);
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateDonorSubmit = async (donorData: IDonorRegisterData) => {
    try {
      setIsLoading(true);
      const registerDonorResponse = await register(donorData);
      dispatch(createDonor({ newDonor: { ...registerDonorResponse.data } }));
      navigate("/login");
      setIsLoading(false);
    } catch (err: any) {
      if (err.response?.data?.error) {
        setError([err.response.data.error]);
      }
      setIsLoading(false);
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  console.log("All donors", donors);
  return (
    <>
      {error.length &&
        error.map((err, index) => (
          <Alert key={index}>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              x
            </AlertCancelBtn>
          </Alert>
        ))}
      <Formik
        initialValues={{
          fullname: "",
          phoneNumber: "",
          email: "",
          age: 18,
          gender: "",
          bloodGroup: "",
          city: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleCreateDonorSubmit}
        validationSchema={donorRegisterSchema}
      >
        {({ handleSubmit, handleChange, touched, errors, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="fullname">Full Name</FormLabel>
              <FormInput
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter Full Name"
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
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter Phone Number"
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
                name="email"
                id="email"
                placeholder="Enter Email"
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
                min="18"
                max="90"
                name="age"
                id="age"
                placeholder="Enter Age"
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
                name="bloodGroup"
                id="bloodGroup"
                onChange={handleChange}
                value={values.bloodGroup}
              >
                <option value="">Choose blood group</option>
                {bloodGroups.map((bloodGroup) => (
                  <option value={bloodGroup.bloodType}>
                    {bloodGroup.bloodType}
                  </option>
                ))}
              </FormSelect>
              {errors.bloodGroup && touched.bloodGroup ? (
                <FormFieldError>{errors.bloodGroup}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="city">City</FormLabel>
              <FormSelect
                name="city"
                id="city"
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
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <FormFieldError>{errors.password}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <FormInput
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter Confirm Password"
                onChange={handleChange}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <FormFieldError>{errors.confirmPassword}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel>Choose Gender</FormLabel>
              <br />
              <RegisterFormLabel htmlFor="male">
                <FormInput
                  type="radio"
                  name="gender"
                  id="male"
                  onChange={handleChange}
                  value="MALE"
                />
                Male
              </RegisterFormLabel>
              <RegisterFormLabel htmlFor="female">
                <FormInput
                  type="radio"
                  name="gender"
                  id="female"
                  onChange={handleChange}
                  value="FEMALE"
                />
                Female
              </RegisterFormLabel>
              {errors.gender && touched.gender ? (
                <FormFieldError>{errors.gender}</FormFieldError>
              ) : null}
            </FormControl>
            <RegisterFormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Creating Donor..." : "Create Donor"}
            </RegisterFormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
