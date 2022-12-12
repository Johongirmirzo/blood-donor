import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { storeAdmin } from "../../redux/admin";
import loginSchema from "../../schemas/loginSchema";
import {
  LoginBox,
  LoginFormBox,
  LoginTextBox,
  LoginTitle,
  LoginForm,
  LoginFormCheckbox,
  LoginFormControl,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginFieldError,
  LoginAlert,
  LoginAlertText,
  LoginAlertCancelBtn,
} from "./index.styled";
import { login } from "../../api/admin";
import {
  setToken,
  getAdminLoginData,
  setAdminLoginData,
  removeAdminLoginData,
} from "../../utils/localStorage";
import { ILoginData } from "./index.types";

const Login = () => {
  const loginRememberUserData = getAdminLoginData();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginAdminSubmit = async (loginData: ILoginData) => {
    try {
      setIsLoading(true);
      const response = await login(loginData);
      console.log(response);
      setIsLoading(false);
      if (!response.data.donor.isAdmin) {
        setError([
          "You aren't admin! You aren't authorized to access this app",
        ]);
      } else {
        if (loginData.rememberMe) {
          setAdminLoginData(loginData);
        } else {
          removeAdminLoginData();
        }
        const admin = {
          adminId: response.data.donor._id,
          fullname: response.data.donor.fullname,
          phoneNumber: response.data.donor.phoneNumber,
          email: response.data.donor.email,
          age: response.data.donor.age,
          gender: response.data.donor.gender,
          bloodGroup: response.data.donor.bloodGroup,
          city: response.data.donor.city,
          isHidden: response.data.donor.isHidden,
          isAdmin: response.data.donor.isAdmin,
        };
        dispatch(
          storeAdmin({
            admin,
          })
        );
        setError([]);
        setToken(response.data.accessToken, response.data.refreshToken);
        navigate("/");
      }
    } catch (error: any) {
      setIsLoading(false);

      if (error.response.status === 429) {
        setError([error.response.data]);
      } else {
        setError([error.response.data.error]);
      }
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  return (
    <LoginBox>
      <LoginFormBox>
        {error &&
          error.map((err, index) => (
            <LoginAlert>
              <LoginAlertText>{err}</LoginAlertText>
              <LoginAlertCancelBtn
                onClick={closeAlertMessage.bind(null, index)}
              >
                X
              </LoginAlertCancelBtn>
            </LoginAlert>
          ))}
        <LoginTextBox>
          <LoginTitle>Admin Login</LoginTitle>
        </LoginTextBox>
        <Formik
          initialValues={{
            email: loginRememberUserData.email || "",
            password: loginRememberUserData.password || "",
            rememberMe: false,
          }}
          validationSchema={loginSchema}
          onSubmit={async (loginData) => {
            console.log(loginData);
            handleLoginAdminSubmit(loginData);
          }}
        >
          {({
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            handleChange,
            values,
          }) => (
            <LoginForm onSubmit={handleSubmit}>
              <LoginFormControl>
                <LoginLabel htmlFor="email">Email</LoginLabel>
                <LoginInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please enter email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <LoginFieldError>{errors.email}</LoginFieldError>
                ) : null}
              </LoginFormControl>

              <LoginFormControl>
                <LoginLabel htmlFor="password">Password</LoginLabel>
                <LoginInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Please enter password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <LoginFieldError>{errors.password}</LoginFieldError>
                ) : null}
              </LoginFormControl>
              <LoginFormControl>
                <LoginFormCheckbox
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </LoginFormControl>
              <LoginButton
                type="submit"
                disabled={isLoading ? true : false}
                isLoading={isLoading ? true : false}
              >
                {isLoading ? "Logging In..." : "Login"}
              </LoginButton>
            </LoginForm>
          )}
        </Formik>
      </LoginFormBox>
    </LoginBox>
  );
};

export default Login;
