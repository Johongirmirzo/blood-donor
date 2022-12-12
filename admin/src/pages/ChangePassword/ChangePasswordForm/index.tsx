import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import adminPasswordSchema from "../../../schemas/adminPasswordSchema";
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
import { changePassword } from "../../../api/admin";
import { IPasswordData } from "../../../types/form";

const ChangePasswordForm = () => {
  const { adminId, email } = useSelector((state: RootState) => state.admin);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordChangeSuccess, setIsPasswordChangeSuccess] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const isDemoMode = (email: string) => email === "admin.demo@gmail.com";

  const updateAdminPassword = async (passwordData: IPasswordData) => {
    if (isDemoMode(email))
      return setError([
        "Sorry but you can't change your password in demo mode!",
      ]);
    try {
      setIsLoading(true);
      await changePassword(passwordData, adminId);
      setError(["Your password is changed successfully!"]);
      setIsLoading(false);
      setIsPasswordChangeSuccess(true);
    } catch (err) {
      setError(["Incorrect Password!"]);
      setIsLoading(false);
      setIsPasswordChangeSuccess(false);
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };
  return (
    <>
      {" "}
      {error &&
        error.map((err, index) => (
          <Alert success={isPasswordChangeSuccess}>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          newConfirmPassword: "",
        }}
        onSubmit={(passwordData) => {
          console.log(passwordData);
          updateAdminPassword(passwordData);
        }}
        validationSchema={adminPasswordSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="currentPassword">Current Password</FormLabel>
              <FormInput
                type="password"
                id="currentPassword"
                placeholder="Enter Current Password"
                name="currentPassword"
                onChange={handleChange}
                value={values.currentPassword}
              />
              {errors.currentPassword && touched.currentPassword ? (
                <FormFieldError>{errors.currentPassword}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="newPassword">New Password</FormLabel>
              <FormInput
                type="password"
                id="newPassword"
                placeholder="Enter New Password"
                name="newPassword"
                onChange={handleChange}
                value={values.newPassword}
              />
              {errors.newPassword && touched.newPassword ? (
                <FormFieldError>{errors.newPassword}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="newConfirmPassword">
                New Confirm Password
              </FormLabel>
              <FormInput
                type="password"
                id="newConfirmPassword"
                placeholder="Enter New Confirm Password"
                name="newConfirmPassword"
                onChange={handleChange}
                value={values.newConfirmPassword}
              />
              {errors.newConfirmPassword && touched.newConfirmPassword ? (
                <FormFieldError>{errors.newConfirmPassword}</FormFieldError>
              ) : null}
            </FormControl>

            <FormButton
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

export default ChangePasswordForm;
